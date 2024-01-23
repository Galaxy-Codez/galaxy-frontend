import React, { Dispatch, SetStateAction } from "react";

interface TabsProps {
  tabs: string[];
  selectedTab: string;
  callBack: Dispatch<SetStateAction<string>>;
}

function Tabs({ tabs, selectedTab, callBack }: TabsProps) {
  return (
    <div className="mt-32 flex flex-wrap items-center justify-center gap-x-24 gap-y-4">
      {tabs.map((tab) => (
        <h2
          key={tab}
          className={
            (selectedTab === tab
              ? "border-b-2 border-primaryBlue text-primaryBlue dark:!text-primaryBlue"
              : "") +
            " font-['DM Sans'] text-xl font-bold leading-9 text-black hover:text-app-orange dark:text-white lg:text-2xl"
          }
        >
          <button onClick={() => callBack(tab)}>{tab}</button>
        </h2>
      ))}
    </div>
  );
}

export default Tabs;
