import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Galaxy Codez",
    short_name: "Galaxy Codez",
    description:
      "Empower your business growth with world-class software, mobile apps and website development with Galaxy Codez.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
    lang: "en",
  };
}
