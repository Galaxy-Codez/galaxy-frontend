import { Blog } from "@/types/blogs.interface";
import { MetadataRoute } from "next";

const BASE_URL = "https://galaxy-frontend.vercel.app";
const API_BASE_URL = "http://localhost:8080";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await fetch(API_BASE_URL + "/blogs")
    .then((res) => res.json())
    .then((data) => data.data);
  const blogRoutes = blogs.map((blog: Blog) => ({
    url: `${BASE_URL}/${blog.slug}`,
    lastModified: new Date(blog.createdAt),
    changeFrequency: "yearly",
    priority: 1,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/blogs`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...blogRoutes,
  ];
}
