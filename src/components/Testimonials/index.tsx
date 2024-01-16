"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { testimonials } from "@/constants/testimonials";

const Testimonials = () => {
  return (
    <section className="flex justify-between py-16 max-xl:flex-col xl:items-center xl:py-48">
      <div className="w-full px-16 py-16 xl:container xl:w-1/2 xl:!px-32">
        <h1 className="text-5xl font-bold text-black dark:text-white">
          Why <span className="text-primaryBlue">our clients</span> love us?
        </h1>
        <p className="mt-3 text-gray-500 dark:text-gray-400">
          Our clients love us because we prioritize effective communication and
          are committed to delivering high-quality software solutions that meet
          the highest standards of excellence.
        </p>
        <Link
          href={"/#"}
          // href={"/contact"}
          className="mt-8 flex w-fit rounded border border-primaryBlue px-8 py-3 font-bold text-primaryBlue hover:border-app-orange hover:bg-app-orange hover:text-white"
        >
          Contact Us
        </Link>
      </div>
      <div className="w-full xl:w-1/2 [&>div]:h-full [&>div]:min-h-96">
        <Swiper autoplay loop pagination modules={[Pagination, Autoplay]}>
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="relative flex h-full items-center justify-start px-16 py-16 max-lg:flex-col">
                <Image
                  decoding="async"
                  width={489}
                  height={472}
                  src={testimonial.img}
                  className="h-[600px] w-[350px]"
                  alt={testimonial.name + " testimonial for galaxy codez"}
                  data-lazy-src={testimonial.img}
                  data-ll-status="loaded"
                />
                <div className="-right-0 inline-flex w-fit flex-col items-start justify-start rounded-bl-[5px] rounded-tl-[5px] border-l-4 border-blue-500 bg-slate-100 py-12 pl-10 pr-4 lg:absolute lg:pl-[53px] dark:bg-black/50">
                  <div className="flex flex-col items-start justify-start self-stretch border-l border-blue-500 pl-[41px]">
                    <span className="font-['DM Sans'] max-w-[500px] text-base font-normal text-black xl:text-[22px] dark:text-white">
                      {testimonial.desc}
                    </span>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch pt-4">
                    <div className="flex flex-col items-start justify-start self-stretch pl-10 pr-[30.36px]">
                      <div>
                        <span className="font-['DM Sans'] text-base font-bold leading-relaxed text-primaryBlue xl:text-[22px]">
                          {testimonial.name},
                        </span>
                        <span className="font-['DM Sans'] text-base font-normal leading-relaxed text-primaryBlue xl:text-[22px]">
                          {" "}
                          {testimonial.title}, {testimonial.org}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
