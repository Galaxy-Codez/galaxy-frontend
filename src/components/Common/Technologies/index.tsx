"use client";
import { Technologies } from "@/constants/technologies";
import { useState } from "react";
import LazyImage from "../Image";
import Tabs from "../Tabs";

const ToolsAndTechnologies = () => {
  const [selectedTab, setSelectedTab] = useState("Web");

  const tabs = [
    "Web",
    "Mobile",
    "Blockchain",
    "UI/UX Design",
    "Database",
    "Testing",
  ];

  return (
    <section className="container pb-32 pt-16">
      <h2 className="text-center">
        <span className="font-['DM Sans'] text-xl font-bold leading-[47.60px] text-black dark:text-white lg:text-[40px]">
          Our Tools
        </span>
        <span className="font-['DM Sans'] text-xl font-bold leading-[47.60px] text-blue-500 lg:text-[40px]">
          {" "}
          & Technologies
        </span>
      </h2>
      <Tabs callBack={setSelectedTab} selectedTab={selectedTab} tabs={tabs} />
      {Technologies.map((techTab) => (
        <div
          key={techTab.id}
          className={`mt-32 flex-wrap items-center justify-center gap-x-4 gap-y-3 overflow-hidden px-5 lg:gap-x-24 lg:gap-y-12 lg:px-32 ${
            selectedTab !== techTab.id
              ? "hidden h-0 opacity-0"
              : "flex h-full opacity-100"
          }}`}
        >
          {techTab.data.map((tech) => (
            <div
              key={tech.title}
              className="inline-flex h-[116.60px] w-[129.59px] flex-col items-start justify-center gap-[0.01px]"
            >
              <div className="flex h-[92.59px] flex-col items-center justify-start self-stretch pb-[7.59px] pl-[22.29px] pr-[22.30px]">
                <div className="inline-flex items-start justify-start">
                  <div className="inline-flex h-[85px] w-[85px] flex-col items-center justify-center">
                    <LazyImage
                      src={tech.img}
                      alt={
                        tech.title +
                        " tech stack used by Galaxy Codez Solutions"
                      }
                      className="relative h-[85px] w-[85px]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex h-6 flex-col items-center justify-start self-stretch pb-px pl-9 pr-[35.61px]">
                <div className="font-['DM Sans'] text-center text-lg font-normal text-black dark:text-white">
                  {tech.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default ToolsAndTechnologies;
