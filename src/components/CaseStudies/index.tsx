"use client";
import { caseStudies } from "@/constants/caseStudies";

import Link from "next/link";
import React from "react";
import LazyVideo from "../Common/Video";
import LazyImage from "../Common/Image";

const CaseStudies = () => {
  return (
    <section className="container py-[70px]">
      <div className="flex flex-col items-center justify-center pb-[45px] pt-[34px]">
        <h2 id="case-studies" className="text-center">
          <span className="font-['DM Sans'] text-5xl font-bold leading-[76.80px] text-black dark:text-white">
            Case{" "}
          </span>
          <span className="font-['DM Sans'] text-5xl font-bold leading-[76.80px] text-blue-500">
            Studies
          </span>
        </h2>
      </div>
      <div className="flex flex-col gap-x-32 gap-y-24">
        {caseStudies.map((study) => (
          <div
            key={study.id}
            className="flex items-center justify-start gap-16 rounded-[10px] bg-slate-50 even:flex-row-reverse dark:bg-black/50 max-lg:flex-col-reverse max-lg:even:flex-col-reverse lg:pl-[30px] lg:pr-[30.01px]"
          >
            <div className="flex w-2/3 flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start gap-[13px] self-stretch pb-[104.36px] pt-[25px]">
                <div className="w-fit max-lg:hidden">
                  <LazyImage
                    className="relative hidden h-[35px] w-full dark:block"
                    src="/images/logo/logo-white.svg"
                    alt="dark logo for Galaxy Codez"
                  />
                  <LazyImage
                    className="relative block h-[35px] w-full dark:hidden"
                    src="/images/logo/logo.svg"
                    alt="light logo for Galaxy Codez"
                  />
                </div>
                <div className="flex flex-col items-center justify-center pr-[0.75px] max-lg:text-center lg:items-start">
                  <h2 className="font-['DM Sans'] pb-[9.59px] text-4xl font-bold leading-[57.60px] text-black dark:text-white">
                    {study.title}
                  </h2>
                  <h3 className="font-['DM Sans'] rounded pb-[10.39px] text-lg font-semibold leading-normal text-black dark:text-white">
                    {study.category}
                  </h3>
                  <p className="font-['DM Sans'] text-xl font-normal leading-[30px] text-black dark:text-white">
                    {study.description}
                  </p>
                  <Link
                    href={study.link}
                    className="mt-3 flex rounded-lg border border-primaryBlue px-4 py-2 text-primaryBlue hover:border-app-orange hover:bg-app-orange hover:text-white"
                  >
                    View Case Study
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex max-h-[472px] max-w-[697px] items-center justify-center overflow-hidden pb-[8.60px]">
              <LazyVideo
                autoPlay
                muted
                loop
                className="lazy h-full w-full"
                src={study.image}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Link
          href={"/"}
          className="mt-8 flex w-fit rounded border border-primaryBlue px-4 py-2 font-bold text-primaryBlue hover:border-app-orange hover:bg-app-orange hover:text-white"
        >
          Explore More
        </Link>
      </div>
    </section>
  );
};

export default CaseStudies;
