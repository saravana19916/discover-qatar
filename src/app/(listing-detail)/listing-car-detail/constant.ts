import { ListingGalleryImage } from "@/components/listing-image-gallery/utils/types";
import carUtilities1 from "@/images/carUtilities/1.png";
import carUtilities2 from "@/images/carUtilities/2.png";
import carUtilities3 from "@/images/carUtilities/3.png";
import carUtilities4 from "@/images/carUtilities/4.png";
import carUtilities5 from "@/images/carUtilities/5.png";
import carUtilities6 from "@/images/carUtilities/6.png";
import carUtilities7 from "@/images/carUtilities/7.png";
import carUtilities8 from "@/images/carUtilities/8.png";

export const PHOTOS: string[] = [
  "https://api.ticketshop.tixbox.com/hotels/cruises/cruise_1.jpg",
  "https://api.ticketshop.tixbox.com/hotels/cruises/cruise_1-1.jpg",
  "https://api.ticketshop.tixbox.com/hotels/cruises/cruise_1-2.jpg",
  "https://api.ticketshop.tixbox.com/hotels/cruises/cruise_1-3.jpg",
  "https://api.ticketshop.tixbox.com/hotels/cruises/cruise_1-4.jpg"
];

export const includes_demo = [
  { name: "Free cancellation up to 48 hours before pick-up" },
  { name: "Dining" },
  { name: "Theft Protection with $19,999 excess" },
  { name: "Activities" },
  {
    name: "Cabins",
  },
  { name: "Swimming Pool" },
];

export const Amenities_demos = [
  { name: "59 MPG Combined, 58 City/60 Hwy", icon: carUtilities1 },
  {
    name: "Forward Collision-Avoidance Assist with Pedestrian Detection (FCA-Ped)",
    icon: carUtilities2,
  },
  { name: "139-hp gas/electric combined", icon: carUtilities3 },
  { name: "Proximity Key with push button start", icon: carUtilities4 },
  { name: "8-inch color touchscreen display audio", icon: carUtilities5 },
  { name: "Smart Cruise Control with Stop & Go (SCC)", icon: carUtilities6 },
  { name: "LED Daytime Running Lights (DRL)", icon: carUtilities7 },
  { name: "Blind-Spot Collision Warning (BCW)", icon: carUtilities8 },
];

export const Cruise_detal = [
  { name: "Passengers", icon: "las la-users text-2xl" },
  { name: "Crew", icon: "las la-users-cog text-2xl" },
  { name: "Passengers to Crew", icon: "las la-user-friends text-2xl" },
  { name: "Launched", icon: "las la-calendar-check text-2xl" },
  { name: "Shore Excursions", icon: "las la-tree text-2xl" }
];
export const imageGallery: ListingGalleryImage[] = [...PHOTOS].map(
  (item, index): ListingGalleryImage => {
    return {
      id: index,
      url: item,
    };
  }
);
