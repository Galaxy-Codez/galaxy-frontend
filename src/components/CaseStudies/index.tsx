"use client";
import { caseStudies } from "@/constants/caseStudies";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LazyVideo from "../Common/Video"

const CaseStudies = () => {
  return (
    <section className="container py-[70px]">
      <div className="flex flex-col items-center justify-center pb-[45px] pt-[34px]">
        <div className="text-center">
          <span className="font-['DM Sans'] text-5xl font-bold leading-[76.80px] text-black dark:text-white">
            Case{" "}
          </span>
          <span className="font-['DM Sans'] text-5xl font-bold leading-[76.80px] text-blue-500">
            Studies
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-x-32 gap-y-24">
        {caseStudies.map((study) => (
          <div
            key={study.id}
            className="flex items-center justify-start gap-16 rounded-[10px] bg-slate-50 even:flex-row-reverse max-lg:flex-col-reverse max-lg:even:flex-col-reverse lg:pl-[30px] lg:pr-[30.01px] dark:bg-black/50"
          >
            <div className="flex w-2/3 flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start gap-[13px] self-stretch pb-[104.36px] pt-[25px]">
                <div className="w-fit max-lg:hidden">
                  <Image
                    className="relative hidden h-[35px] w-full dark:block"
                    src="/images/logo/logo-white.svg"
                    alt=""
                    loading="lazy"
                    width={140}
                    height={35}
                  />
                  <Image
                    className="relative block h-[35px] w-full dark:hidden"
                    src="/images/logo/logo.svg"
                    loading="lazy"
                    alt=""
                    width={140}
                    height={35}
                  />
                </div>
                <div className="flex flex-col items-center justify-center pr-[0.75px] max-lg:text-center lg:items-start">
                  <div className="flex pb-[9.59px]">
                    <div className="font-['DM Sans'] text-4xl font-bold leading-[57.60px] text-black dark:text-white">
                      {study.title}
                    </div>
                  </div>
                  <div className="flex pb-[10.39px]">
                    <div className="font-['DM Sans'] rounded text-lg font-semibold leading-normal text-black dark:text-white">
                      {study.category}
                    </div>
                  </div>
                  <div className="flex ">
                    <div className="font-['DM Sans'] text-xl font-normal leading-[30px] text-black dark:text-white">
                      {study.description}
                    </div>
                  </div>
                  <Link
                    href={"/"}
                    // href={study.link}
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
          // href={"/work"}
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
