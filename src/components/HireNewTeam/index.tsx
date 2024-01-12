import Image from "next/image";
import Link from "next/link";
import React from "react";

const HireNewTeam = () => {
  return (
    <section className="flex flex-col-reverse items-center justify-end gap-x-20 bg-[#f2f5f9] px-16 py-36 lg:flex-row lg:px-0 lg:pl-32 dark:bg-black/40">
      <div>
        <span className="font-['DM Sans'] text-[40px] font-bold leading-[64px] text-black dark:text-white">
          Unlock your business potential with &nbsp;
        </span>
        <span className="font-['DM Sans'] text-[40px] font-bold leading-[64px] text-blue-500">
          our expert outsourcing solutions
        </span>
        <br />
        <div className="font-['DM Sans'] mt-4 text-xl font-normal leading-[30px] text-black dark:text-white">
          We offer an extension to your in-house team by thoughtfully curating
          the
          <br />
          perfect team members for each task and project. With us, you can
          access a<br />
          team of skilled designers, developers, and project managers, without
          the hassle
          <br />
          of managing full-time employees.
        </div>
        <Link
          href={"/#"}
          // href={"/hire-dedicated-team"}
          className="mt-8 flex w-fit rounded border border-primaryBlue text-white px-4 py-2 font-bold capitalize bg-primaryBlue hover:border-app-orange hover:bg-app-orange hover:text-white"
        >
          Let&apos;s get started
        </Link>
      </div>
      <Image
        fetchPriority="high"
        decoding="async"
        width={930}
        height={813}
        src="/images/fivetms-mockup.webp"
        alt="five tms AI software developed using android, ios, and web application development services by Galaxy Codez."
        title=""
        data-lazy-srcset="/images/fivetms-mockup.webp 930w, /images/fivetms-mockup.webp 300w, /images/fivetms-mockup.webp 768w"
        data-lazy-sizes="(max-width: 930px) 100vw, 930px"
        className="wp-image-43348 entered lazyloaded"
        data-lazy-src="/images/fivetms-mockup.webp"
        data-ll-status="loaded"
        sizes="(max-width: 930px) 100vw, 930px"
      />
    </section>
  );
};

export default HireNewTeam;
