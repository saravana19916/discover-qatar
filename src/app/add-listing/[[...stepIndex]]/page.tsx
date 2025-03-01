"use client";

import React, { useState, useEffect } from "react";
import PageAddListing1 from "./hotel/PageAddListing1";
import PageAddListing10 from "./hotel/PageAddListing10";
import PageAddListing2 from "./hotel/PageAddListing2";
import PageAddListing3 from "./hotel/PageAddListing3";
import PageAddListing4 from "./hotel/PageAddListing4";
import PageAddListing5 from "./hotel/PageAddListing5";
import PageAddListing6 from "./hotel/PageAddListing6";
import PageAddListing7 from "./hotel/PageAddListing7";
import PageAddListing8 from "./hotel/PageAddListing8";
import PageAddListing9 from "./hotel/PageAddListing9";

import EPageAddListing1 from "./event/EPageAddListing1";
import EPageAddListing10 from "./event/EPageAddListing10";
import EPageAddListing2 from "./event/EPageAddListing2";
import EPageAddListing3 from "./event/EPageAddListing3";
import EPageAddListing4 from "./event/EPageAddListing4";
import EPageAddListing5 from "./event/EPageAddListing5";
import EPageAddListing6 from "./event/EPageAddListing6";
import EPageAddListing7 from "./event/EPageAddListing7";
import EPageAddListing8 from "./event/EPageAddListing8";
import EPageAddListing9 from "./event/EPageAddListing9";

const Page = ({
  params,
  searchParams,
}: {
  params: { stepIndex: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const [listingType, setListingType] = useState("Hotel");
  const handleListingTypeOnChange = (event: React.ChangeEvent<any>) => {
    setListingType(event.target.value);
    localStorage.setItem("listingType", event.target.value);
  }

  useEffect(() => {
    const storage: string = localStorage.getItem("listingType") || "Hotel";
    if(storage) {
      setListingType(storage);
    }
  }, []);

  let ContentComponent = PageAddListing1;
  switch (Number(params.stepIndex)) {
    case 1:
      if(listingType == "Hotel")
        ContentComponent = PageAddListing1;
      else if(listingType == "Event")
        ContentComponent = EPageAddListing1;
      break;
    case 2:
      if(listingType == "Hotel")
        ContentComponent = PageAddListing2;
      else if(listingType == "Event")
        ContentComponent = EPageAddListing2;
      break;
    case 3:
      if(listingType == "Hotel")
        ContentComponent = PageAddListing3;
      else if(listingType == "Event")
        ContentComponent = EPageAddListing3;
      break;
    case 4:
      if(listingType == "Hotel")
        ContentComponent = PageAddListing4;
      else if(listingType == "Event")
        ContentComponent = EPageAddListing4;
      break;
    case 5:
      if(listingType == "Hotel")
        ContentComponent = PageAddListing5;
      else if(listingType == "Event")
        ContentComponent = EPageAddListing5;
      break;
    case 6:
      if(listingType == "Hotel")
        ContentComponent = PageAddListing6;
      else if(listingType == "Event")
        ContentComponent = EPageAddListing6;
      break;
    case 7:
      if(listingType == "Hotel")
        ContentComponent = PageAddListing7;
      else if(listingType == "Event")
        ContentComponent = EPageAddListing7;
      break;
    case 8:
      if(listingType == "Hotel")
        ContentComponent = PageAddListing8;
      else if(listingType == "Event")
        ContentComponent = EPageAddListing8;
      break;
    case 9:
      if(listingType == "Hotel")
        ContentComponent = PageAddListing9;
      else if(listingType == "Event")
        ContentComponent = EPageAddListing9;
      break;
    case 10:
      if(listingType == "Hotel")
        ContentComponent = PageAddListing10;
      else if(listingType == "Event")
        ContentComponent = EPageAddListing10;
      break;

    default:
      if(listingType == "Hotel")
        ContentComponent = PageAddListing1;
      else if(listingType == "Event")
        ContentComponent = EPageAddListing1;
      break;
  }

  return <ContentComponent listingType={listingType} handleListingTypeOnChange={handleListingTypeOnChange} />;
};

export default Page;
