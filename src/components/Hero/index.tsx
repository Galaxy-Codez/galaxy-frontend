"use client";
import { heroSlider } from "@/constants/heroSlider";
import Link from "next/link";
import React from "react";
import { Pagination, Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Hero = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (_index: number, className: string) {
      return (
        '<span class="cursor-pointer w-4 h-2 !rounded ' +
        className +
        '">' +
        "</span>"
      );
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] overflow-hidden bg-white pt-[60px] md:pt-[75px]"
    >
      <Swiper
        pagination={pagination}
        loop={true}
        navigation={{
          enabled: true,
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Pagination, Autoplay, Navigation, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        allowSlideNext
        allowSlidePrev
        // autoplay
        className="h-full min-h-[90vh] w-full"
      >
        {heroSlider.map((slider) => (
          <SwiperSlide key={slider.id} className="relative h-auto w-full">
            <div className="container flex h-full min-h-[92vh] items-center justify-between gap-24 py-32">
              <div className="w-full max-lg:text-center xl:w-1/2">
                <Link
                  href={"/#"}
                  // href={slider.link}
                  className="w-fit"
                >
                  <h1 className="text-2xl font-bold text-white lg:text-4xl">
                    {slider.title}
                  </h1>
                </Link>
                <p className="my-6 text-sm text-white lg:text-base">
                  {slider.description}
                </p>
                <Link
                  href={"/#"}
                  // href={slider.link}
                  className="mt-8 rounded-lg border border-white bg-transparent px-4 py-2 text-white hover:bg-white hover:text-black dark:hover:text-white"
                >
                  {slider.buttonText}
                </Link>
              </div>
            </div>
            <div className="absolute top-0 -z-10 h-full w-full">
              <video
                preload="auto"
                autoPlay
                muted
                loop
                className="h-full min-h-[95vh] w-full object-cover"
                src={slider.imageUrl}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-next right-12 min-h-16 min-w-16 rounded-full bg-white p-4 after:text-2xl after:text-black after:![content:'next'] dark:bg-black after:dark:text-white"></div>
      <div className="swiper-button-prev left-12 min-h-16 min-w-16 rounded-full bg-white p-4 after:text-2xl after:text-black after:![content:'prev'] dark:bg-black after:dark:text-white"></div>
    </section>
  );
};
export default Hero;
