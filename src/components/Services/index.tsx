import { services } from "@/constants/services";
import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <section className="container py-[70px]">
      <div className="flex flex-col items-center justify-center pb-[45px] pt-[34px]">
        <h2 id="our-services" className="text-center">
          <span className="font-['DM Sans'] text-5xl font-bold leading-[76.80px] text-black dark:text-white">
            Our{" "}
          </span>
          <span className="font-['DM Sans'] text-5xl font-bold leading-[76.80px] text-blue-500">
            Services
          </span>
        </h2>
        <p className="font-['DM Sans'] text-center text-[22px] font-normal leading-[33px] text-black dark:text-white">
          Accelerate your business success with our innovative digital
          solutions.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-x-32 gap-y-4 lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="group flex w-full min-w-[340px] shrink grow basis-0 flex-col items-start justify-start gap-[30px] self-stretch border-2 border-black border-opacity-10 px-[17px] pb-[0.01px] pt-[27px] hover:bg-primaryBlue dark:border-white/10"
          >
            <div className="flex w-full flex-col">
              <p className="font-['DM Sans'] w-full text-end text-4xl font-normal leading-relaxed text-black text-opacity-70 group-hover:text-white dark:text-white">
                0{service.id}
              </p>
              <div className="[&>svg>g>path]:fill-black [&>svg>g>path]:group-hover:fill-white [&>svg>g>path]:dark:fill-white [&>svg>path]:fill-black [&>svg>path]:group-hover:fill-white [&>svg>path]:dark:fill-white [&>svg]:h-9 [&>svg]:w-9">
                {service.image}
              </div>
            </div>
            <div className="flex flex-col">
              <h4 className="font-['DM Sans'] text-xl font-medium leading-loose text-black group-hover:text-white dark:text-white">
                {service.title}
              </h4>
              <Link
                href={service.link}
                className="font-['DM Sans'] w-fit text-3xl font-normal leading-relaxed text-black group-hover:text-white dark:text-white"
              >
                →
              </Link>
            </div>
          </div>
        ))}
        <div className="group flex w-full min-w-[340px] shrink grow basis-0 flex-col items-start justify-start gap-[30px] self-stretch border-2 border-black border-opacity-10 bg-primaryBlue px-[17px] pb-[0.01px] pt-[27px] hover:bg-app-orange dark:border-white/10">
          <div className="flex w-full flex-col">
            <p className="font-['DM Sans'] w-full text-end text-4xl font-normal leading-relaxed text-white">
              08
            </p>
          </div>
          <div className="flex flex-col">
            <h4 className="font-['DM Sans'] text-xl font-medium leading-loose text-white">
              Explore
            </h4>
            <Link
              href={"service.link"}
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
