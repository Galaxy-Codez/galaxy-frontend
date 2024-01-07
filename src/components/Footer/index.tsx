import Link from "next/link";
import { IoIosMail } from "react-icons/io";
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="relative z-10 bg-[#000000] pb-8 pt-20 lg:pt-[100px]"
      data-wow-delay=".15s"
    >
      <div className="container flex flex-col gap-7 text-white">
        <div className="container flex flex-wrap items-center justify-between gap-y-16 max-lg:flex-col">
          <div className="flex items-center gap-3">
            <FaPhoneAlt size={36} />
            <div className="h-full min-h-10 w-0.5 bg-white" />
            <div className="flex flex-col gap-3">
              <h5 className="text-xs">
                <span>Have a query?</span>
              </h5>
              <div className="hover:text-primaryBlue">
                <Link href="tel:+92 (342) 2930560">
                  <span>+92 (342) 2930560</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-wrap items-center gap-3">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="https://linkedin.com/afzalimdad9"
                className=" text-[#ffffffbd] hover:text-primaryBlue"
              >
                <FaLinkedin size={32} />
              </Link>

              <Link
                href="https://www.instagram.com/afzalimdad9_/"
                className=" text-[#ffffffbd] hover:text-primaryBlue"
              >
                <FaInstagram size={32} />
              </Link>

              <Link
                href="https://facebook.com/afzalimdad92"
                className=" text-[#ffffffbd] hover:text-primaryBlue"
              >
                <FaFacebook size={32} />
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/terms-of-use"
                className=" text-[#ffffffbd] hover:text-primaryBlue"
              >
                Terms of Use
              </Link>
              <span> –</span>
              <Link
                href="/privacy-policy"
                className=" text-[#ffffffbd] hover:text-primaryBlue"
              >
                Privacy Policy.
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <IoIosMail size={48} />
            <div className="h-full min-h-10 w-0.5 bg-white" />
            <div className="flex flex-col gap-3">
              <h5 className="text-xs">
                <span>Email us at</span>
              </h5>
              <div className="hover:text-primaryBlue">
                <Link href="mailto:afzalimdad9@gmail.com">
                  <span>afzalimdad9@gmail.com</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <span className="text-center text-lg text-[#9a9ea6]">
          © 2024 Galaxy Codez Inc. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
