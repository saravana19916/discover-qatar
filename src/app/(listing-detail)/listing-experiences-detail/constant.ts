import { ListingGalleryImage } from "@/components/listing-image-gallery/utils/types";

export const PHOTOS: string[] = [
  "https://api.ticketshop.tixbox.com/hotels/events/daydream-music-festival.jpg",
  "https://api.ticketshop.tixbox.com/hotels/events/daydream-music-festival1.jpg",
  "https://api.ticketshop.tixbox.com/hotels/events/daydream-music-festival2.jpg",
  "https://api.ticketshop.tixbox.com/hotels/events/daydream-music-festival3.jpg",
  "https://api.ticketshop.tixbox.com/hotels/events/daydream-music-festival4.jpg"
];

export const includes_demo = [
  { name: "Merry Christmas" },
  { name: "Qatar 2022" },
  { name: "Qatar 2019" },
  { name: "The Netherlands 2019" },
  { name: "Spain 2018" },
];

export const imageGallery: ListingGalleryImage[] = [...PHOTOS].map(
  (item, index): ListingGalleryImage => {
    return {
      id: index,
      url: item,
    };
  }
);
