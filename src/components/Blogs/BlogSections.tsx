"use client";
import React, { useEffect, useState } from "react";
import Tabs from "../Common/Tabs";
import BlogLargeCard from "../Common/BlogLargeCard";
import BlogSmallCard from "../Common/BlogSmallCard";

function BlogSections() {
  const [selectedTab, setSelectedTab] = useState("All");
  const [blogs, setBlogs] = useState([]);
  const [skip, setSkip] = useState(0);

  const tabs =
    `All,AI & Tech,Blockchain,Ecommerce,Mobile App,News,Software,Software Testing,UI/UX,Web App,WordPress`.split(
      ",",
    );

  const fetchBlogs = async () => {
    try {
      const request = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs/paginated?skip=${skip}`,
      );
      const blogsJson = await request.json();
      setBlogs((pre) => [...pre, ...blogsJson.data]);
    } catch (e) {}
  };

  useEffect(() => {
    fetchBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skip]);

  useEffect(() => {
    fetchBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="bg-white py-16 dark:bg-black/90 lg:py-32">
      <div className="container">
        <h1 className="text-center text-4xl font-bold">
          GalaxyCodez helps businesses
        </h1>
        <p className="mt-5 text-center text-lg">
          Empower people through technology and innovative solutions
        </p>
        <Tabs tabs={tabs} callBack={setSelectedTab} selectedTab={selectedTab} />
        <div className="relative my-16 flex justify-between gap-10 max-lg:flex-col">
          <div className="w-full lg:w-3/4">
            {blogs.map((blog) => (
              <BlogLargeCard
                CardDescription={blog.description}
                CardTitle={blog.title}
                image={blog.social_image}
                slug="/"
                key={blog.slug}
                setSkip={setSkip}
                total={blogs.length}
                last={blogs.length - 1 === blogs.indexOf(blog)}
              />
            ))}
          </div>
          <div className="w-full lg:w-1/4">
            <div className="sticky top-28">
              <div>
                <h1 className="text-3xl font-bold">Recent Posts</h1>
                <div className="mt-3 flex flex-col gap-3">
                  {blogs
                    .sort(function (a, b) {
                      return (
                        new Date(b.created_at).getTime() -
                        new Date(a.created_at).getTime()
                      );
                    })
                    .splice(0, 3)
                    .map((blog) => (
                      <BlogSmallCard
                        CardDescription={blog.description}
                        CardTitle={blog.title}
                        image={blog.social_image}
                        slug="/"
                        key={blog.id}
                      />
                    ))}
                </div>
              </div>
              <div className="mt-20">
                <h1 className="text-3xl font-bold">Popular Posts</h1>
                <div className="mt-3 flex flex-col gap-3">
                  {blogs
                    .sort(function (a, b) {
                      return (
                        b.public_reactions_count - a.public_reactions_count
                      );
                    })
                    .splice(0, 3)
                    .map((blog) => (
                      <BlogSmallCard
                        CardDescription={blog.description}
                        CardTitle={blog.title}
                        image={blog.social_image}
                        slug="/"
                        key={blog.id}
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogSections;
