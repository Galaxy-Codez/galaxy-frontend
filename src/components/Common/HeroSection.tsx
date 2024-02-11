"use client";
import Link from "next/link";
import { ReactNode, useEffect, useRef } from "react";

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
  buttonText = "Let's Get Started",
  leftChildrens,
  children,
  bannerImage,
}: HeroSectionProps) => {
  let backgroundImage = `linear-gradient(180deg,rgba(0,61,119,0.75)0%,rgba(38,147,250,0.75) 100%),url(${bannerImage})!important`;
  const ref = useRef<any>();

  useEffect(() => {
    if (ref.current) {
      let html = ref.current.innerHTML.split(
        '<section class="h-full min-h-screen bg-black bg-no-repeat bg-cover py-20 lg:py-[110px]">',
      )[1];
      const startHtml = `<section class="h-full min-h-screen bg-black bg-no-repeat bg-cover py-20 lg:py-[110px]" style="background-image: ${backgroundImage};">`;
      if (html) {
        ref.current.innerHTML = startHtml + html;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current]);

  return (
    <div ref={ref}>
      <section
        className={`h-full min-h-screen bg-black bg-cover bg-no-repeat py-20 lg:py-[110px]`}
        style={{ backgroundImage }}
      >
        <div className="container flex h-full items-center justify-between gap-x-64 gap-y-16 px-4 max-lg:flex-col lg:px-32">
          <div className="flex h-full min-h-[80vh] flex-col justify-center max-lg:items-center">
            <h1 className="font-['Inter'] text-3xl font-bold text-white lg:text-6xl ">
              {title}
            </h1>
            {subHeading && (
              <h2 className="mt-4 font-['Inter'] text-3xl font-bold text-white lg:text-6xl ">
                {subHeading}
              </h2>
            )}
            {description && (
              <p className="mb-10 mt-4 font-['Inter'] text-base font-medium text-white max-lg:text-center lg:max-w-[60vw] lg:text-xl">
                {description}
              </p>
            )}
            {leftChildrens}
            {getStartedLink && (
              <Link
                href={getStartedLink}
                className="w-fit rounded-lg border-2 border-white px-10 py-3 font-bold text-white hover:border-app-orange hover:bg-app-orange"
              >
                {buttonText}
              </Link>
            )}
          </div>
          {children}
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
