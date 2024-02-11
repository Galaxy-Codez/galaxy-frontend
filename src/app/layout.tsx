import "../styles/index.css";
import "../styles/prism-vsc-dark-plus.css";
import { Metadata, Viewport } from "next";
import LayoutProvider from "@/components/Providers/LayoutProvider";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import LoaderContextProvider from "@/Contexts";
export const metadata: Metadata = {
  title: { default: "", template: "%s - Galaxy Codez" },
  metadataBase: new URL(process.env.FRONTEND_URL),
  alternates: {
    canonical: process.env.FRONTEND_URL,
  },
  description:
    "Empower your business growth with world-class software, mobile apps and website development with Galaxy Codez.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.FRONTEND_URL,
    siteName: "Galaxy Codez",
    images: [
      {
        url: process.env.FRONTEND_URL + "/opengraph-images/home.png",
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
        url: process.env.FRONTEND_URL + "/opengraph-images/home.png",
        width: 1200,
        height: 630,
        alt: "Galaxy Codez",
        type: "image/jpeg",
        host: "galaxycodez.com",
        hostname: "galaxycodez.com",
        href: process.env.FRONTEND_URL + "/opengraph-images/home.png",
        origin: process.env.FRONTEND_URL + "/opengraph-images/home.png",
        pathname: "galaxycodez.com/opengraph-images/home.png",
        username: "galaxycodez",
        secureUrl: process.env.FRONTEND_URL + "/opengraph-images/home.png",
      },
    ],
  },
  applicationName: "Galaxy Codez",
  authors: {
    name: "Galaxy Codez",
    url: process.env.FRONTEND_URL,
  },
  category: "Software Development",
  creator: "Galaxy Codez",
  generator: "Galaxy Codez",
  keywords:
    "Solutions,Galaxy Codez,Software Solutions,Solutions Web,Galaxy,Codez,Development,Web,software,Web Development,Software Development,Mobile,Business,App Development,Mobile App Development,Web App,Solutions Inc,Shopify Solutions,Web Application Development,Chain Solutions,Web Apps,Mobile App,Blockchain Solutions,Expert Outsourcing Solutions,Mobile Apps,Business Potential",
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  verification: {
    google: "iCcQGtrgsy6kJxm8bnGXXWPwB9rceih2M27pWa21J2E",
  },
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
        <LoaderContextProvider>
          <LayoutProvider>{children}</LayoutProvider>
        </LoaderContextProvider>
      </body>
    </html>
  );
}
