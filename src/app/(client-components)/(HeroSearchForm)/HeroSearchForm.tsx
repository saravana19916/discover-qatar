"use client";

import React, { FC, useState } from "react";
import HotelsSearchForm from "./(hotels-search-form)/HotelsSearchForm";
import AccommodationSearchForm from "./(accommodation-search-form)/AccommodationSearchForm";
import TransportationSearchForm from "./(transportation-search-form)/TransportationSearchForm";

export type SearchTab = "Hotels" | "Accommodation" | "Transportation";

export interface HeroSearchFormProps {
  className?: string;
  currentTab?: SearchTab;
  currentPage?: "Hotels" | "Accommodation" | "Transportation";
}

const HeroSearchForm: FC<HeroSearchFormProps> = ({
  className = "",
  currentTab = "Hotels",
  currentPage,
}) => {
  const tabs: SearchTab[] = ["Hotels", "Accommodation", "Transportation"];
  const [tabActive, setTabActive] = useState<SearchTab>(currentTab);

  const renderTab = () => {
    return (
      <ul className="ml-2 sm:ml-6 md:ml-12 flex space-x-5 sm:space-x-8 lg:space-x-11 overflow-x-auto hiddenScrollbar">
        {tabs.map((tab) => {
          const active = tab === tabActive;
          return (
            <li
              onClick={() => setTabActive(tab)}
              className={`flex-shrink-0 flex items-center cursor-pointer text-sm lg:text-base font-medium ${
                active
                  ? ""
                  : "text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-400"
              } `}
              key={tab}
            >
              {active && (
                <span className="block w-2.5 h-2.5 rounded-full bg-neutral-800 dark:bg-neutral-100 mr-2" />
              )}
              <span>{tab}</span>
            </li>
          );
        })}
      </ul>
    );
  };

  const renderForm = () => {
    switch (tabActive) {
      case "Hotels":
        return <HotelsSearchForm />;
      case "Accommodation":
        return <AccommodationSearchForm />;
      case "Transportation":
        return <TransportationSearchForm />;

      default:
        return null;
    }
  };

  return (
    <div
      className={`nc-HeroSearchForm w-full max-w-6xl py-5 lg:py-0 ${className}`}
    >
      {renderTab()}
      {renderForm()}
    </div>
  );
};

export default HeroSearchForm;
