import CaseStudies from "@/components/CaseStudies";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import HireNewTeam from "@/components/HireNewTeam";
import Services from "@/components/Services";
import ToolsAndTechnologies from "@/components/Common/Technologies";
import Testimonials from "@/components/Testimonials";
import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Web, Mobile & Software Development Company - Galaxy Codez",
  metadataBase: new URL(process.env.FRONTEND_URL),
  alternates: {
    canonical: process.env.FRONTEND_URL,
  },
  description:
    "Supercharge your business growth with Galaxy Codez's premier software, mobile apps, and website development solutions.",
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
      "Supercharge your business growth with Galaxy Codez's premier software, mobile apps, and website development solutions.",
    title:
      "Web, Mobile & Software Development Company - Galaxy Codez",
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
  referrer: "no-referrer",
  publisher: "Galaxy Codez",
  icons: {
    shortcut: "https://galaxy-frontend.vercel.app/favicon.ico",
    apple: "https://galaxy-frontend.vercel.app/favicon.ico",
    icon: "https://galaxy-frontend.vercel.app/favicon.ico",
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

export default function Home() {
  return (
    <main>
      <ScrollUp />
      <Hero />
      <Services />
      <CaseStudies />
      <HireNewTeam />
      <Testimonials />
      <ToolsAndTechnologies />
      <Contact />
    </main>
  );
}
