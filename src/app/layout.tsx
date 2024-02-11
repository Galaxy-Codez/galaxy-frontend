import "../styles/index.css";
import "../styles/prism-vsc-dark-plus.css";
import { Metadata, Viewport } from "next";
import LayoutProvider from "@/components/Providers/LayoutProvider";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import LoaderContextProvider from "@/Contexts";
import { Analytics } from "@vercel/analytics/react";

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
    "Galaxy Codez, IT, Solutions, cubicus, freecodecamp, coding, programming, tech, software, python, react, nextjs, blog, software development, web development, mobile app development, custom software solutions, technology consulting, IT services, software engineering, programming, coding, software architecture, front-end development, back-end development, full-stack development, UI/UX design, responsive web design, cross-platform development, cloud computing, DevOps, automation, software testing, quality assurance, agile development, Scrum, project management, software maintenance, tech support, IT solutions, cybersecurity, data analytics, machine learning, artificial intelligence, blockchain, IoT (Internet of Things), virtual reality, augmented reality, game development, tech stack, frameworks, programming languages, Java, Python, C++, C#, JavaScript, Node.js, React.js, Angular, Vue.js, HTML, CSS, Sass, Less, PHP, Laravel, CodeIgniter, Ruby on Rails, .NET, ASP.NET, Unity, Swift, Objective-C, Kotlin, Android, iOS, Windows, macOS, Linux, Unix, databases, MySQL, PostgreSQL, SQLite, MongoDB, Redis, NoSQL, frontend tools, Webpack, Babel, Grunt, Gulp, version control, Git, GitHub, Bitbucket, continuous integration, CI/CD, Jenkins, Docker, Kubernetes, cloud platforms, AWS, Azure, Google Cloud, Heroku, serverless architecture, API development, REST, GraphQL, SOAP, CMS, Content Management System, WordPress, Joomla, Drupal, Wix, Squarespace, Magento, PrestaShop, Shopify, E-commerce solutions, Customer Relationship Management, CRM, Salesforce, HubSpot, Zoho, Microsoft Dynamics, SugarCRM, open source technologies, LAMP stack, MEAN stack, MERN stack, open-source CMS, open-source CRM, enterprise solutions, business intelligence, data warehousing, cloud storage, scalability, performance optimization, code review, code refactoring, software documentation, Agile methodologies, Scrum framework, Kanban, Lean, Continuous improvement, User-centered design, Usability testing, Wireframing, Prototyping, User personas, User journey mapping, Responsive design, Mobile-first design, Accessibility, SEO, Search Engine Optimization, Social media integration, Analytics, Google Analytics, User analytics, Market research, Competitor analysis, User experience, User interface, API integration, Mobile responsiveness, Software deployment, Release management, Quality control, Code deployment, User acceptance testing, Test automation, Load testing, Performance testing, Security testing, Penetration testing, Incident response, Data privacy, Compliance, Regulatory compliance, ISO certifications, Technology partnerships, Client satisfaction, Case studies, Portfolio, Project showcase, Client testimonials, Custom software development, Software customization, Legacy system modernization, API development and integration, Mobile app design and development, Web application development, Enterprise software solutions, IT consulting services, Technology stack consulting, UI/UX design services, Software maintenance and support, Agile project management, DevOps solutions, Cross-platform development services, Cloud migration services, Data analytics and visualization, Machine learning solutions, Artificial intelligence development, Blockchain development, IoT solutions, Virtual reality and augmented reality applications, Game development services, Custom CRM development, CRM integration services, Open-source CMS development, Website design and development, E-commerce solutions, Responsive web design services, Custom software testing, Quality assurance services, Cybersecurity solutions, IT infrastructure management, Cloud computing services, Continuous integration and deployment, Serverless architecture, API development and integration, Database design and management, Frontend and backend development services, Technical support services, IT solutions for businesses, Technology consulting for startups, Software solutions for enterprises, IT project management, Custom software development process, User-focused software design, Secure software development practices, Technology trends and innovations.",
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
        <Analytics />

        <LoaderContextProvider>
          <LayoutProvider>{children}</LayoutProvider>
        </LoaderContextProvider>
      </body>
    </html>
  );
}
