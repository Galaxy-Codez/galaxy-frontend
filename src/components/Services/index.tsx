import { services } from "@/constants/services";
import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <section className="container py-[70px]">
      <div className="flex flex-col items-center justify-center pb-[45px] pt-[34px]">
        <div className="text-center">
          <span className="font-['DM Sans'] text-5xl font-bold leading-[76.80px] text-black dark:text-white">
            Our{" "}
          </span>
          <span className="font-['DM Sans'] text-5xl font-bold leading-[76.80px] text-blue-500">
            Services
          </span>
        </div>
        <div className="font-['DM Sans'] text-center text-[22px] font-normal leading-[33px] text-black dark:text-white">
          Accelerate your business success with our innovative digital
          solutions.
        </div>
      </div>
      <div className="grid grid-cols-1 gap-x-32 gap-y-4 lg:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="hover:bg-primaryBlue group flex w-full min-w-[340px] shrink grow basis-0 flex-col items-start justify-start gap-[30px] self-stretch border-2 border-black border-opacity-10 px-[17px] pb-[0.01px] pt-[27px] dark:border-white/10"
          >
            <div className="flex w-full flex-col">
              <h2 className="font-['DM Sans'] w-full text-end text-4xl font-normal leading-relaxed text-black text-opacity-10 group-hover:text-white dark:text-white">
                0{service.id}
              </h2>
              {service.image}
            </div>
            <div className="flex flex-col">
              <div className="font-['DM Sans'] text-xl font-medium leading-loose text-black group-hover:text-white dark:text-white">
                {service.title}
              </div>
              <Link
                href={service.link}
                className="font-['DM Sans'] w-fit text-3xl font-normal leading-relaxed text-black group-hover:text-white dark:text-white"
              >
                →
              </Link>
            </div>
          </div>
        ))}
        <div
          className="group flex w-full bg-app-orange min-w-[340px] shrink grow basis-0 flex-col items-start justify-start gap-[30px] self-stretch border-2 border-black border-opacity-10 px-[17px] pb-[0.01px] pt-[27px] dark:border-white/10"
        >
          <div className="flex w-full flex-col">
            <h2 className="opacity-0 font-['DM Sans'] w-full text-end text-4xl font-normal leading-relaxed text-black text-opacity-10 dark:text-white">
             1
            </h2>
            
          </div>
          <div className="flex flex-col">
            <div className="font-['DM Sans'] text-xl font-medium leading-loose text-white">
              Explore
            </div>
            <Link
              href={'service.link'}
              className="font-['DM Sans'] w-fit text-3xl font-normal leading-relaxed text-white"
            >
              →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
