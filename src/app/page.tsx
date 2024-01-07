import CaseStudies from "@/components/CaseStudies";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import HireNewTeam from "@/components/HireNewTeam";
import Services from "@/components/Services";
import ToolsAndTechnologies from "@/components/Technologies";
import Testimonials from "@/components/Testimonials";
import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Web, Mobile & Software Development Company - Galaxy Codez",
  metadataBase: new URL("https://galaxycodez.com"),
  alternates: {
    canonical: "https://galaxycodez.com",
  },
  description:
    "Empower your business growth with world-class software, mobile apps and website development with Galaxy Codez.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://galaxycodez.com",
    siteName: "Galaxy Codez",
    images: [
      {
        url: "https://galaxycodez.com/opengraph-images/home.png",
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
    title: "Web, Mobile & Software Development Company - Galaxy Codez",
    site: "@galaxycodez",
    siteId: "https://twitter.com/galaxycodez",
    images: [
      {
        url: "https://galaxycodez.com/opengraph-images/home.png",
        width: 1200,
        height: 630,
        alt: "Galaxy Codez",
        type: "image/jpeg",
        host: "galaxycodez.com",
        hostname: "galaxycodez.com",
        href: "https://galaxycodez.com/opengraph-images/home.png",
        origin: "https://galaxycodez.com/opengraph-images/home.png",
        pathname: "galaxycodez.com/opengraph-images/home.png",
        username: "galaxycodez",
        secureUrl: "https://galaxycodez.com/opengraph-images/home.png",
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
