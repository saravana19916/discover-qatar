import React, { FC } from "react";
import imagePng from "@/images/hero-right3.png";
import HeroSearchForm from "../(client-components)/(HeroSearchForm)/HeroSearchForm";
import Image from "next/image";
import ButtonPrimary from "@/shared/ButtonPrimary";

export interface SectionHeroProps {
  className?: string;
}

const SectionHero: FC<SectionHeroProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-SectionHero flex flex-col-reverse lg:flex-col relative ${className}`}
    >
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0">
          <h2 className="font-medium text-3xl md:text-4xl xl:text-5xl !leading-[114%] ">
              Events, Accommodation & Experience
          </h2>
          <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
            Discover the best events, unforgettable experiences, and premium hotels in Qatar.
          </span>
          <ButtonPrimary href="/listing-stay-map" sizeClass="px-5 py-4 sm:px-7">
            Start your search
          </ButtonPrimary>
        </div>
        <div className="flex-grow">
          <Image className="w-full" src={imagePng} alt="hero" priority />
        </div>
      </div>

      <div className="hidden lg:block z-10 mb-12 lg:mb-0 lg:-mt-40 w-full">
        <HeroSearchForm />
      </div>
    </div>
  );
};

export default SectionHero;
