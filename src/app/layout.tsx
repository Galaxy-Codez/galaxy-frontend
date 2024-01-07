import "../styles/index.css";
import "../styles/prism-vsc-dark-plus.css";
import { Metadata, Viewport } from "next";
import LayoutProvider from "@/components/Providers/LayoutProvider";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export const metadata: Metadata = {
  title: { default: "", template: "%s - Galaxy Codez" },
  metadataBase: new URL("https://galaxy-frontend.vercel.app"),
  alternates: {
    canonical: "https://galaxy-frontend.vercel.app",
  },
  description:
    "Empower your business growth with world-class software, mobile apps and website development with Galaxy Codez.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://galaxy-frontend.vercel.app",
    siteName: "Galaxy Codez",
    images: [
      {
        url: "https://galaxy-frontend.vercel.app/opengraph-images/home.png",
        width: 1200,
        height: 630,
        alt: "Galaxy Codez",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@galaxycodez",
    creatorId: "https://twitter.com/galaxycodez",
    description:
      "Empower your business growth with world-class software, mobile apps and website development with Galaxy Codez.",
    title: { default: "", template: "%s - Galaxy Codez" },
    site: "@galaxycodez",
    siteId: "https://twitter.com/galaxycodez",
    images: [
      {
        url: "https://galaxy-frontend.vercel.app/opengraph-images/home.png",
        width: 1200,
        height: 630,
        alt: "Galaxy Codez",
        type: "image/jpeg",
        host: "galaxycodez.com",
        hostname: "galaxycodez.com",
        href: "https://galaxy-frontend.vercel.app/opengraph-images/home.png",
        origin: "https://galaxy-frontend.vercel.app/opengraph-images/home.png",
        pathname: "galaxycodez.com/opengraph-images/home.png",
        username: "galaxycodez",
        secureUrl: "https://galaxy-frontend.vercel.app/opengraph-images/home.png",
      },
    ],
  },
  applicationName: "Galaxy Codez",
  authors: {
    name: "Galaxy Codez",
    url: "https://galaxy-frontend.vercel.app",
  },
  category: "Software Development",
  creator: "Galaxy Codez",
  generator: "Galaxy Codez",
  keywords:
    "Galaxy Codez, IT, Solutions, cubicus, freecodecamp, coding, programming, tech, software, python, react, nextjs, blog",
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
};

export const viewport: Viewport = {
  themeColor: "black",
  colorScheme: "normal",
  height: "device-height",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: true,
  width: "device-width",
  interactiveWidget: "resizes-content",
  viewportFit: "auto",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className="!scroll-smooth">
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}
