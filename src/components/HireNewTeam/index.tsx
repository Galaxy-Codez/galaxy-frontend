import Link from "next/link";
import React from "react";
import LazyImage from "../Common/Image";

const HireNewTeam = () => {
  return (
    <section className="flex flex-col-reverse items-center justify-end gap-x-20 bg-[#f2f5f9] px-16 py-36 dark:bg-black/40 lg:flex-row lg:px-0 lg:pl-32">
      <div>
        <h2 id="unlock-your-business-potential-with-our-expert-outsourcing-solutions">
          <span className="font-['DM Sans'] text-[40px] font-bold leading-[64px] text-black dark:text-white">
            Unlock your business potential with &nbsp;
          </span>
          <span className="font-['DM Sans'] text-[40px] font-bold leading-[64px] text-blue-500">
            our expert outsourcing solutions
          </span>
        </h2>
        <br />
        <p className="font-['DM Sans'] mt-4 text-xl font-normal leading-[30px] text-black dark:text-white">
          We offer an extension to your in-house team by thoughtfully curating
          the
          <br />
          perfect team members for each task and project. With us, you can
          access a<br />
          team of skilled designers, developers, and project managers, without
          the hassle
          <br />
          of managing full-time employees.
        </p>
        <Link
          href={"/"}
          // href={"/hire-dedicated-team"}
          className="mt-8 flex w-fit rounded border border-primaryBlue bg-primaryBlue px-4 py-2 font-bold capitalize text-white hover:border-app-orange hover:bg-app-orange hover:text-white"
        >
          Let&apos;s get started
        </Link>
      </div>
      <LazyImage
        src="/images/fivetms-mockup.webp"
        alt="five tms AI software developed using android, ios, and web application development services by Galaxy Codez."
        title="five tms AI software developed using android, ios, and web application development services by Galaxy Codez."
      />
    </section>
  );
};

export default HireNewTeam;
