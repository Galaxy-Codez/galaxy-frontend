"use client";
import React, { useEffect, useState } from "react";
import HeroSection from "@/components/Common/HeroSection";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaGithub,
  FaLink,
} from "react-icons/fa6";
import Testimonials from "../Testimonials";
import Contact from "../Contact";
import { Blog } from "@/types/blogs.interface";
import BlogSmallCard from "../Common/BlogSmallCard";
import LazyImage from "../Common/Image";
import Head from "next/head";

const SingleBlog = ({ blog }) => {
  const router = useRouter();
  const [links, setLinks] = useState([]);
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const blogs: Blog[] = await new Promise<Blog[]>(function (
        resolve,
        reject,
      ) {
        fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/blogs")
          .then((res) => res.json())
          .then((data) => resolve(data.data))
          .catch((err) => reject(err));
      }).catch(() => []);
      setBlogs(
        blogs
          .filter((x) => blogs.some((y) => y.slug === x.slug))
          .sort(
            (a, b) =>
              new Date(b.published_at).getTime() -
              new Date(a.published_at).getTime(),
          )
          .slice(0, 8),
      );
    } catch (e) {}
  };

  useEffect(() => {
    if (!blog) {
      router.push("/error");
    } else {
      let elem = document.getElementById("description");

      elem.innerHTML = blog.body_html;
      const headings = Array.from(elem.getElementsByTagName("h1")).length
        ? Array.from(elem.getElementsByTagName("h1"))
        : Array.from(elem.getElementsByTagName("h2")).length
          ? Array.from(elem.getElementsByTagName("h2"))
          : Array.from(elem.getElementsByTagName("h3"));
      let arr = [];
      headings.forEach((heading) => {
        heading.id = heading.textContent
          .toLowerCase()
          .trim()
          .split(" ")
          .join("-");

        arr.push({
          href: heading.textContent.toLowerCase().trim().split(" ").join("-"),
          text: heading.textContent.trim(),
        });
      });

      setLinks(arr);
    }

    fetchBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blog]);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://dev.to/assets/crayons-7870bae01e6b6faa36fdd09d45db8386c7fbdd6a6823dd54f8c94a6c936abd06.css"
          media="all"
          id="main-crayons-stylesheet"
        ></link>
      </Head>
      <HeroSection
        title={blog?.title}
        description={blog?.description}
        bannerImage={blog?.cover_image || blog?.social_image || ""}
        leftChildrens={
          <div className="mb-10 flex flex-col gap-8">
            <Link
              href={`/author/${blog?.user?.username}`}
              className="flex cursor-pointer items-center gap-2 text-lg text-white"
            >
              by
              <b>
                {blog?.user?.name || ""} |{" "}
                {new Date(blog?.created_at).toDateString() || ""}
              </b>
            </Link>
            <div className="flex items-center gap-6">
              <Link
                href={`https://www.instagram.com/share?url=${process.env.NEXT_PUBLIC_FRONTEND_URL}/blogs/${blog?.slug}`}
              >
                <FaInstagram size={24} color="white" />
              </Link>
              <Link
                href={`https://twitter.com/intent/tweet?url=${process.env.NEXT_PUBLIC_FRONTEND_URL}/blogs/${blog?.slug}&text=${blog?.title}`}
              >
                <FaXTwitter size={24} color="white" />
              </Link>
              <Link
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${process.env.NEXT_PUBLIC_FRONTEND_URL}/blogs/${blog?.slug}`}
              >
                <FaLinkedinIn size={24} color="white" />
              </Link>
              <Link
                href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_FRONTEND_URL}/blogs/${blog?.slug}`}
              >
                <FaFacebookF size={24} color="white" />
              </Link>
            </div>
          </div>
        }
      />

      <div className="container relative my-16 flex justify-between gap-10 max-lg:flex-col">
        <div>
          <div id="description"></div>
          <div className="relative flex items-center justify-start px-16 py-16 max-lg:flex-col">
            <LazyImage
              src={blog?.user?.profile_image}
              className="h-auto w-full object-cover lg:w-[350px]"
              alt={blog?.user?.name}
            />
            <div className="inline-flex h-full w-fit flex-col items-start justify-start rounded-bl-[5px] rounded-tl-[5px] border-l-4 border-blue-500 bg-slate-100 py-12 pl-10 pr-4 dark:bg-black/50 lg:pl-[53px]">
              <div className="flex flex-col items-start justify-start self-stretch border-l border-blue-500 pl-[41px]">
                <span className="font-['DM Sans'] max-w-[500px] text-base font-normal text-black dark:text-white xl:text-[22px]">
                  {blog?.user?.summary}
                </span>
              </div>
              <div className="flex flex-col items-start justify-start self-stretch pt-4">
                <div className="flex flex-col items-start justify-start self-stretch pl-10 pr-[30.36px]">
                  <span className="font-['DM Sans'] text-base font-semibold leading-relaxed text-black dark:text-white xl:text-[22px]">
                    {blog?.user?.name}
                  </span>
                  <div className="mt-3 flex items-center gap-6">
                    {blog?.user?.github_username && (
                      <Link
                        href={`https://www.github.com/${blog?.user?.github_username}`}
                      >
                        <FaGithub size={24} className="text-primaryBlue" />
                      </Link>
                    )}
                    {blog?.user?.twitter_username && (
                      <Link
                        href={`https://twitter.com/${blog?.user?.twitter_username}`}
                      >
                        <FaXTwitter size={24} className="text-primaryBlue" />
                      </Link>
                    )}
                    {blog?.user?.website_url && (
                      <Link href={blog?.user?.website_url}>
                        <FaLink size={24} className="text-primaryBlue" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/4">
          <div className="sticky top-28">
            <div>
              <h1 className="text-3xl font-bold">Table of contents</h1>
              <div className="mt-3 flex min-h-32 flex-col gap-3 px-1">
                {links.map((link, idx) => (
                  <Link
                    href={`#${link.href}`}
                    key={idx}
                    className="text-lg font-semibold text-primaryBlue"
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h1 className="mt-14 text-3xl font-bold">Recent Posts</h1>
              <div className="mt-3 flex min-h-32 flex-col gap-3">
                {blogs.slice(4, 8).map((blog) => (
                  <BlogSmallCard
                    CardDescription={blog?.description}
                    CardTitle={blog?.title}
                    image={blog?.social_image}
                    slug={`/blogs/${blog?.slug}`}
                    key={blog?.id}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Testimonials />
      <Contact />
    </>
  );
};

export default SingleBlog;
