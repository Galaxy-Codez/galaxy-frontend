import SingleBlog from "@/components/Blogs/SingleBlog";
import { Metadata } from "next";

export const generateMetadata: (context?: any) => Promise<Metadata> = async ({
  params: { slug },
}) => {
  const blog = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs/slug/${slug}`,
  )
    .then((res) => res.json())
    .then((data) => data.data);

  return new Promise((resolve, _) => {
    resolve({
      title: blog?.title,
      description: blog?.description,
      keywords:
        "Software house contact, Tech support GalaxyCodez, Collaboration opportunities, Software solutions inquiry, Contact us GalaxyCodez, Expert software services, Technology consultation, Digital innovation support, GalaxyCodez partnership, Technical assistance software house, Software development queries, Innovate with GalaxyCodez, Get in touch software experts, Seamless technology solutions, Software consultation services, Contact for IT solutions, Code optimization support, Connect with GalaxyCodez team, Collaboration in tech, GalaxyCodez expertise outreach " +
        blog?.title.split(" ").join("") +
        blog?.description.split(" ").join("") +
        `,${blog?.tags}`,
      authors: {
        name: blog?.user.username,
        url: blog?.user.website_url,
      },
      creator: blog?.user.username,
      category: blog?.tags,
      generator: blog?.user.username,
      robots:
        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      verification: {
        google: "iCcQGtrgsy6kJxm8bnGXXWPwB9rceih2M27pWa21J2E",
      },

      openGraph: {
        type: "website",
        locale: "en_US",
        url: process.env.NEXT_PUBLIC_FRONTEND_URL + `/blogs/${blog?.slug}`,
        siteName: blog?.title,
        images: [
          {
            url: blog?.social_image,
            width: 1200,
            height: 630,
            alt: blog?.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        creator: `@${blog?.user.twitter_username}`,
        creatorId: "https://twitter.com/" + blog?.user.twitter_username,
        description: blog?.description,
        title: blog?.title,
        site: `@${blog?.user.twitter_username}`,
        siteId: "https://twitter.com/" + blog?.user.twitter_username,
        images: [
          {
            url: blog?.social_image,
            width: 1200,
            height: 630,
            alt: blog?.title,
            type: "image/jpeg",
            host: "galaxycodez.com",
            hostname: "galaxycodez.com",
            href: blog?.social_image,
            origin: blog?.social_image,
            pathname: blog?.social_image,
            username: blog?.user.username,
            secureUrl: blog?.social_image,
          },
        ],
      },
    });
  });
};

const getData = async (slug: string | any[]) => {
  const blog = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs/slug/${slug}`,
  )
    .then((res) => res.json())
    .then((data) => data.data);
  if (!blog) {
    return;
  }

  const devToBlog = await fetch("https://dev.to/api/articles/" + blog?.id).then(
    (res) => res.json(),
  );
  const devToBlogUser = await fetch(
    "https://dev.to/api/users/" + blog?.user?.user_id,
  ).then((res) => res.json());
  return {
    ...devToBlog,
    ...blog,
    user: { ...blog.user, ...devToBlog.user, ...devToBlogUser },
  };
};

const BlogPage = async ({ params: { slug } }) => {
  const blog = await getData(slug);

  return <SingleBlog blog={blog} />;
};

export default BlogPage;
