import Link from "next/link";
import { ReactNode } from "react";

interface HeroSectionProps {
  title: string;
  description: string;
  getStartedLink?: string;
  buttonText?: string;
  subHeading?: string;
  bannerImage?: string;
  leftChildrens?: ReactNode;
  children?: ReactNode;
}

const HeroSection = ({
  title,
  subHeading,
  description,
  getStartedLink,
  buttonText = "Let&apos;s Get Started",
  leftChildrens,
  children,
  bannerImage,
}: HeroSectionProps) => {
  return (
    <section
      className="h-full min-h-screen bg-white bg-cover py-20 lg:py-[110px]"
      style={{
        backgroundImage: `linear-gradient(180deg,rgba(0,61,119,0.75) 0%,rgba(38,147,250,0.75) 100%),url(${bannerImage})!important`,
      }}
    >
      <div className="container flex h-full items-center justify-between gap-x-64 gap-y-16 px-4 max-lg:flex-col lg:px-32">
        <div className="flex h-full min-h-[80vh] flex-col justify-center max-lg:items-center">
          <h1 className="font-['Inter'] text-3xl font-bold text-white lg:text-6xl ">
            {title}
          </h1>
          <h2 className="mt-4 font-['Inter'] text-3xl font-bold text-white lg:text-6xl ">
            {subHeading}
          </h2>
          <p className="mb-10 mt-4 font-['Inter'] text-base font-medium text-white max-lg:text-center lg:max-w-[60vw] lg:text-xl">
            {description}
          </p>
          {leftChildrens}
          <Link
            href={getStartedLink}
            className="w-fit rounded-lg border-2 border-white px-10 py-3 font-bold text-white hover:border-app-orange hover:bg-app-orange"
          >
            {buttonText}
          </Link>
        </div>
        {children}
      </div>
    </section>
  );
};

export default HeroSection;
