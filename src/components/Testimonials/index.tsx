"use client";
import { testimonials } from "@/constants/testimonials";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import LazyImage from "../Common/Image";

const Testimonials = () => {
  return (
    <section className="flex justify-between py-16 max-xl:flex-col xl:items-center xl:py-48">
      <div className="w-full px-16 py-16 xl:container xl:w-1/2 xl:!px-32">
        <h2 className="text-5xl font-bold text-black dark:text-white">
          Why <span className="text-primaryBlue">our clients</span> love us?
        </h2>
        <p className="mt-3 text-gray-500 dark:text-gray-400">
          Our clients love us because we prioritize effective communication and
          are committed to delivering high-quality software solutions that meet
          the highest standards of excellence.
        </p>
        <Link
          href={"/contact"}
          className="mt-8 flex w-fit rounded border border-primaryBlue px-8 py-3 font-bold text-primaryBlue hover:border-app-orange hover:bg-app-orange hover:text-white"
        >
          Contact Us
        </Link>
      </div>
      <div className="testimonial-slide w-full xl:w-1/2 [&>div]:h-full [&>div]:min-h-96">
        <Swiper autoplay loop pagination modules={[Pagination, Autoplay]}>
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="relative flex h-full items-center justify-start px-16 py-16 max-lg:flex-col">
                <LazyImage
                  src={testimonial.img}
                  className="h-[600px] w-full object-cover max-lg:max-h-[300px] lg:w-[350px]"
                  alt={testimonial.name + " testimonial for Galaxy Codez Solutions"}
                />
                <div className="-right-0 inline-flex w-fit flex-col items-start justify-start rounded-bl-[5px] rounded-tl-[5px] border-l-4 border-blue-500 bg-slate-100 py-12 pl-10 pr-4 dark:bg-black/50 lg:absolute lg:pl-[53px]">
                  <div className="flex flex-col items-start justify-start self-stretch border-l border-blue-500 pl-[41px]">
                    <p className="font-['DM Sans'] max-w-[500px] text-base font-normal text-black dark:text-white xl:text-[22px]">
                      {testimonial.desc}
                    </p>
                  </div>
                  <div className="flex flex-col items-start justify-start self-stretch pt-4">
                    <div className="flex flex-col items-start justify-start self-stretch pl-10 pr-[30.36px]">
                      <div>
                        <span className="font-['DM Sans'] text-base font-normal leading-relaxed text-black dark:text-white xl:text-[22px]">
                          <strong>{testimonial.name}</strong>
                          {", "}
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
