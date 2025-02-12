import React, { FC } from "react";
import LocationInput from "../LocationInput";
import GuestsInput from "../GuestsInput";
import AccommodationDateSingleInput from "./AccommodationDateSingleInput";

export interface AccommodationSearchFormProps {}

const AccommodationSearchForm: FC<AccommodationSearchFormProps> = ({}) => {
  const renderForm = () => {
    return (
      <form className="w-full relative mt-8 flex flex-col md:flex-row  rounded-3xl md:rounded-full shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-800 ">
        <LocationInput className="flex-[1.5]" />
        <div className="self-center border-r border-slate-200 dark:border-slate-700 h-8"></div>
        <AccommodationDateSingleInput className="flex-1" />
        <div className="self-center border-r border-slate-200 dark:border-slate-700 h-8"></div>
        <GuestsInput
          className="flex-1"
          buttonSubmitHref="/listing-experiences"
        />
      </form>
    );
  };

  return renderForm();
};

export default AccommodationSearchForm;
