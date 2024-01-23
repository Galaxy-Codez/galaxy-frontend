import HeroSection from "@/components/Common/HeroSection";
import ContactForm from "@/components/Contact/ContactForm";
import { Metadata } from "next";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

export const metadata: Metadata = {
  title: "Contact",
  description: `Reach out to GalaxyCodez effortlessly through our dedicated contact page. Whether you have inquiries about our software solutions, need technical support, or wish to explore collaboration opportunities, our team is here to assist you. Contact us and experience the seamless synergy of innovative technology and expert software services. Trust GalaxyCodez to be your partner in navigating the digital realm with precision and excellence.`,
  keywords:
    "Software house contact, Tech support GalaxyCodez, Collaboration opportunities, Software solutions inquiry, Contact us GalaxyCodez, Expert software services, Technology consultation, Digital innovation support, GalaxyCodez partnership, Technical assistance software house, Software development queries, Innovate with GalaxyCodez, Get in touch software experts, Seamless technology solutions, Software consultation services, Contact for IT solutions, Code optimization support, Connect with GalaxyCodez team, Collaboration in tech, GalaxyCodez expertise outreach",
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
