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
  metadataBase: new URL("https://galaxycodez.com"),
  alternates: {
    canonical: "https://galaxycodez.com",
  },
  description:
    "Empower your business growth with world-class software, mobile apps and website development with Ropstam Solutions.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://galaxycodez.com",
    siteName: "Galaxy Codez",
    images: [
      {
        url: "https://galaxycodez.com/images/og-image.jpg",
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
      "Empower your business growth with world-class software, mobile apps and website development with Ropstam Solutions.",
    title: { default: "", template: "%s - Galaxy Codez" },
    site: "@galaxycodez",
    siteId: "https://twitter.com/galaxycodez",
    images: [
      {
        url: "https://galaxycodez.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Galaxy Codez",
        type: "image/jpeg",
        host: "galaxycodez.com",
        hostname: "galaxycodez.com",
        href: "https://galaxycodez.com/images/og-image.jpg",
        origin: "https://galaxycodez.com/images/og-image.jpg",
        pathname: "galaxycodez.com/images/og-image.jpg",
        username: "galaxycodez",
        secureUrl: "https://galaxycodez.com/images/og-image.jpg",
      },
    ],
  },
  applicationName: "Galaxy Codez",
  authors: {
    name: "Galaxy Codez",
    url: "https://galaxycodez.com",
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
