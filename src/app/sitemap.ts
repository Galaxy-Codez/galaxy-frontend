import { Blog } from "@/types/blogs.interface";
import { MetadataRoute } from "next";

const BASE_URL = process.env.FRONTEND_URL;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs: Blog[] = await new Promise(function (resolve, reject) {
    fetch(process.env.BACKEND_URL + "/blogs")
      .then((res) => res.json())
      .then((data) => resolve(data.data))
      .catch((err) => reject(err));
  }).catch(() => []);
  const blogRoutes: MetadataRoute.Sitemap = blogs.map((blog: Blog) => ({
    url: `${BASE_URL}/${blog.slug}`,
    lastModified: new Date(blog.created_at),
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
