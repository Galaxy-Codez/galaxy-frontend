import HeroSection from "@/components/Common/HeroSection";
import ContactForm from "@/components/Contact/ContactForm";
import { Metadata } from "next";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact GalaxyCodez for software inquiries, support, or collaborations. Our team excels in innovative technology. Trust us for precision and excellence.`,
  keywords:
    "Software Solutions,Solutions Web,Galaxy,Codez,Development,Web,software,Web Development,Software Development,Mobile,Business,App Development,Mobile App Development,Web App,Solutions Inc,Shopify Solutions,Web Application Development,Chain Solutions,Web Apps,Mobile App,Blockchain Solutions,Expert Outsourcing Solutions,Mobile Apps,Business Potential,IT, Solutions, cubicus, freecodecamp, coding, programming, tech, software, python, react, nextjs, blog, software development, web development, mobile app development, custom software solutions, technology consulting, IT services, software engineering, programming, coding, software architecture, front-end development, back-end development, full-stack development, UI/UX design, responsive web design, cross-platform development, cloud computing, DevOps, automation, software testing, quality assurance, agile development, Scrum, project management, software maintenance, tech support, IT solutions, cybersecurity, data analytics, machine learning, artificial intelligence, blockchain, IoT (Internet of Things), virtual reality, augmented reality, game development, tech stack, frameworks, programming languages, Java, Python, C++, C#, JavaScript, Node.js, React.js, Angular, Vue.js, HTML, CSS, Sass, Less, PHP, Laravel, CodeIgniter, Ruby on Rails, .NET, ASP.NET, Unity, Swift, Objective-C, Kotlin, Android, iOS, Windows, macOS, Linux, Unix, databases, MySQL, PostgreSQL, SQLite, MongoDB, Redis, NoSQL, frontend tools, Webpack, Babel, Grunt, Gulp, version control, Git, GitHub, Bitbucket, continuous integration, CI/CD, Jenkins, Docker, Kubernetes, cloud platforms, AWS, Azure, Google Cloud, Heroku, serverless architecture, API development, REST, GraphQL, SOAP, CMS, Content Management System, WordPress, Joomla, Drupal, Wix, Squarespace, Magento, PrestaShop, Shopify, E-commerce solutions, Customer Relationship Management, CRM, Salesforce, HubSpot, Zoho, Microsoft Dynamics, SugarCRM, open source technologies, LAMP stack, MEAN stack, MERN stack, open-source CMS, open-source CRM, enterprise solutions, business intelligence, data warehousing, cloud storage, scalability, performance optimization, code review, code refactoring, software documentation, Agile methodologies, Scrum framework, Kanban, Lean, Continuous improvement, User-centered design, Usability testing, Wireframing, Prototyping, User personas, User journey mapping, Responsive design, Mobile-first design, Accessibility, SEO, Search Engine Optimization, Social media integration, Analytics, Google Analytics, User analytics, Market research, Competitor analysis, User experience, User interface, API integration, Mobile responsiveness, Software deployment, Release management, Quality control, Code deployment, User acceptance testing, Test automation, Load testing, Performance testing, Security testing, Penetration testing, Incident response, Data privacy, Compliance, Regulatory compliance, ISO certifications, Technology partnerships, Client satisfaction, Case studies, Portfolio, Project showcase, Client testimonials, Custom software development, Software customization, Legacy system modernization, API development and integration, Mobile app design and development, Web application development, Enterprise software solutions, IT consulting services, Technology stack consulting, UI/UX design services, Software maintenance and support, Agile project management, DevOps solutions, Cross-platform development services, Cloud migration services, Data analytics and visualization, Machine learning solutions, Artificial intelligence development, Blockchain development, IoT solutions, Virtual reality and augmented reality applications, Game development services, Custom CRM development, CRM integration services, Open-source CMS development, Website design and development, E-commerce solutions, Responsive web design services, Custom software testing, Quality assurance services, Cybersecurity solutions, IT infrastructure management, Cloud computing services, Continuous integration and deployment, Serverless architecture, API development and integration, Database design and management, Frontend and backend development services, Technical support services, IT solutions for businesses, Technology consulting for startups, Software solutions for enterprises, IT project management, Custom software development process, User-focused software design, Secure software development practices, Technology trends and innovations,Software house contact, Tech support GalaxyCodez, Collaboration opportunities, Software solutions inquiry, Contact us GalaxyCodez, Expert software services, Technology consultation, Digital innovation support, GalaxyCodez partnership, Technical assistance software house, Software development queries, Innovate with GalaxyCodez, Get in touch software experts, Seamless technology solutions, Software consultation services, Contact for IT solutions, Code optimization support, Connect with GalaxyCodez team, Collaboration in tech, GalaxyCodez expertise outreach",
  alternates: {
    canonical: "https://galaxy-frontend.vercel.app/contact",
  },
};

const BlogsPage = () => {
  return (
    <>
      <HeroSection
        title="Contact Us"
        description={`At GalaxyCodez, we specialize in delivering exceptional digital experiences. From web development to design and maintenance, our experts are here to help. Contact us today to learn more about how we can achieve your software development goals.`}
        getStartedLink="#"
        buttonText="Explore Our Work"
        bannerImage="/images/banners/contact-banner.webp"
        leftChildrens={
          <div className="mb-10 flex flex-wrap items-center gap-8">
            <Link
              href="tel:+92 (342) 2930560"
              className="group flex cursor-pointer items-center gap-2"
            >
              <FaPhone
                size={24}
                className="text-white group-hover:text-app-orange"
              />
              <h2 className="text-xl text-white group-hover:text-app-orange">
                Call Us
              </h2>
            </Link>
            <Link
              href="mailto:afzalimdad9@gmail.com"
              className="group flex cursor-pointer items-center gap-2"
            >
              <IoMdMail
                size={24}
                className="text-white group-hover:text-app-orange"
              />
              <h2 className="text-xl text-white group-hover:text-app-orange">
                Email Us
              </h2>
            </Link>
          </div>
        }
      >
        <ContactForm />
      </HeroSection>
    </>
  );
};

export default BlogsPage;
