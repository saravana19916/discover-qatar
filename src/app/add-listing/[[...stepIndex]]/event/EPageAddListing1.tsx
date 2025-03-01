import React, { FC } from "react";
import Input from "@/shared/Input";
import Select from "@/shared/Select";
import FormItem from "../../FormItem";
import Textarea from "@/shared/Textarea";
import Checkbox from "@/shared/Checkbox";

export interface EPageAddListing1Props {
  listingType?: string;
  handleListingTypeOnChange?: (event: React.ChangeEvent<any>) => void;
}

const EPageAddListing1: FC<EPageAddListing1Props> = ({listingType, handleListingTypeOnChange}) => {
  return (
    <>
      <h2 className="text-2xl font-semibold">Listing information</h2>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
      {/* FORM */}
      <div className="space-y-8">
        {/* ITEM */}
        <FormItem
          label="Choose type"
          desc="Events: Input your event & experiences details in this form for listing."
        >
          <Select onChange={handleListingTypeOnChange} value={listingType}>
            <option value="Hotel">Hotel</option>
            <option value="Event">Events & Experiences</option>
            <option value="Cruise">Cruises</option>
            <option value="Flight">Flights</option>
          </Select>
        </FormItem>
        <FormItem
          label="Listing Name"
          desc="Type your listing name which would be placed as the title of your listing."
        >
          <Input placeholder="Listing Name" />
        </FormItem>
        <FormItem
          label="Listing Description"
          desc="In this section, you should provide us with description of your listing, limited to xxxx characters."
        >
          <Textarea placeholder="..." rows={14} />
        </FormItem>
        <FormItem
          label="Listing Type"
          desc="Pick your listing top from the dropdown menu (i.e : Event, Restaurant, Experience, Transportation, Product, Service )"
        >
          <Select>
            <option value="Event">Event</option>
            <option value="Restaurant">Restaurant</option>
            <option value="Experience">Experience</option>
            <option value="Transportation">Transportation</option>
            <option value="Product">Product</option>
            <option value="Service">Service</option>
          </Select>
        </FormItem>
        <FormItem
          label="Listing Category"
          desc="In this section, you choose the category of your listing, so it can be classified accordingly in the platform."
        >
          <Select>
            <option value="Performing Art">Performing Art</option>
            <option value="Music">Music</option>
            <option value="Sports">Sports</option>
            <option value="Exhibition">Exhibition</option>
            <option value="Leisure">Leisure</option>
            <option value="Tourism">Tourism</option>
            <option value="Transportation">Transportation</option>
          </Select>
        </FormItem>
        <FormItem
          label="Language"
          desc="In this section, you choose the language of the performance or content."
        >
          <Select>
            <option value="English">English</option>
            <option value="Arabic">Arabic</option>
            <option value="Spanish">Spanish</option>
          </Select>
        </FormItem>
        <div>
          <label className="text-sm font-medium text-neutral-700" htmlFor="">
            Suitabilities
          </label>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <Checkbox label="Family" name="Family" defaultChecked />
            <Checkbox label="Kids" name="Kids" />
            <Checkbox label="Couples" name="Couples" defaultChecked />
            <Checkbox label="Adults" name="Adults" />
            <Checkbox label="Children" name="Children" />
            <Checkbox label="Teenagers" name="Teenagers" />
            <Checkbox label="Elderly" name="Elderly" defaultChecked />
            <Checkbox label="Locals" name="Locals" />
            <Checkbox label="Expats" name="Expats" />
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-neutral-700" htmlFor="">
            Content Grading
          </label>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <Checkbox label="General Audience (G)" name="General Audience (G)" defaultChecked />
            <Checkbox label="Parental Guidance (PG)" name="Parental Guidance (PG)" />
            <Checkbox label="Teens (12 - 18)" name="Teens (12 - 18)" defaultChecked />
            <Checkbox label="Mature" name="Mature" />
            <Checkbox label="Explicit" name="Explicit" />
          </div>
        </div>
      </div>
      <div>
        <label className="text-sm font-medium text-neutral-700" htmlFor="">
          Age Limit
        </label>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <Checkbox label="Open Age (+2)" name="Open Age (+2)" defaultChecked />
          <Checkbox label="Open Age (+4)" name="Open Age (+4)" />
          <Checkbox label="Plus 18" name="Plus 18" defaultChecked />
          <Checkbox label="Plus 21" name="Plus 21" />
        </div>
      </div>
      <div>
        <label className="text-sm font-medium text-neutral-700" htmlFor="">
          Facilities
        </label>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              id: "concessionStands",
              label: "Concession Stands",
              value: "Concession Stands",
            },
            {
              id: "hotFood",
              label: "Hot Food",
              value: "Hot Food",
            },
            {
              id: "coldFood",
              label: "Cold Food",
              value: "Cold Food",
            },
            {
              id: "smoking",
              label: "Smoking",
              value: "Smoking",
            },
            {
              id: "nonSmoking",
              label: "Non Smoking",
              value: "Non Smoking",
            },
            {
              id: "smokingRoom",
              label: "Smoking Room",
              value: "Smoking Room",
            },
            {
              id: "freeParking",
              label: "Free Parking",
              value: "Free Parking",
            },
            {
              id: "paidParking",
              label: "Paid Parking",
              value: "Paid Parking",
            },
            {
              id: "outdoorParking",
              label: "Outdoor Parking",
              value: "Outdoor Parking",
            },
            {
              id: "indoorParking",
              label: "Indoor Parking",
              value: "Indoor Parking",
            },
            {
              id: "valetService",
              label: "Valet Service",
              value: "Valet Service",
            },
            {
              id: "dropOffStation",
              label: "Drop-off Station",
              value: "Drop-off Station",
            },
            {
              id: "publicRestroom",
              label: "Public Restroom",
              value: "Public Restroom",
            },
            {
              id: "vipRestroom",
              label: "VIP Restroom",
              value: "VIP Restroom",
            },
            {
              id: "familyRestroom",
              label: "Family Restroom",
              value: "Family Restroom",
            },
            {
              id: "freeWifi",
              label: "Free Wifi",
              value: "Free Wifi",
            },
            {
              id: "paidWifi",
              label: "Paid Wifi",
              value: "Paid Wifi",
            },
            {
              id: "noWifi",
              label: "No Wifi",
              value: "No Wifi",
            },
            {
              id: "changingRooms",
              label: "Changing Rooms",
              value: "Changing Rooms",
            },
            {
              id: "lockers",
              label: "Lockers",
              value: "Lockers",
            },
            {
              id: "showers",
              label: "Showers",
              value: "Showers",
            },
            {
              id: "generalEntrance",
              label: "General Entrance",
              value: "General Entrance",
            },
            {
              id: "vipEntrance",
              label: "VIP Entrance",
              value: "VIP Entrance",
            },
            {
              id: "securityStaff",
              label: "Security Staff",
              value: "Security Staff",
            },
            {
              id: "securityCameras",
              label: "Security Cameras",
              value: "Security Cameras",
            },
            {
              id: "securityArches",
              label: "Security Arches",
              value: "Security Arches",
            },
            {
              id: "cctvSurveillance",
              label: "CCTV Surveillance",
              value: "CCTV Surveillance",
            },
            {
              id: "taxiStation",
              label: "Taxi Station",
              value: "Taxi Station",
            },
            {
              id: "busStation",
              label: "Bus Station",
              value: "Bus Station",
            },
            {
              id: "metroStation",
              label: "Metro Station",
              value: "Metro Station",
            },
            {
              id: "helipad",
              label: "Helipad",
              value: "Helipad",
            },
            {
              id: "ambulance",
              label: "Ambulance",
              value: "Ambulance",
            },
            {
              id: "medicalRoom",
              label: "Medical Room",
              value: "Medical Room",
            },
            {
              id: "assistedAccess",
              label: "Assisted Access",
              value: "Assisted Access",
            },
            {
              id: "wheelchair",
              label: "Wheelchair",
              value: "Wheelchair",
            },
            {
              id: "infoCenter",
              label: "Info Center",
              value: "Info Center",
            },
            {
              id: "lostAndFound",
              label: "Lost & Found",
              value: "Lost & Found",
            },
            {
              id: "airConditioning",
              label: "Air Conditioning",
              value: "Air Conditioning",
            },
            {
              id: "customerService",
              label: "Customer Service",
              value: "Customer Service",
            },
          ].map((facility) => (
            <Checkbox label={facility.label} name={facility.id} defaultChecked />
          ))}
        </div>
      </div>
    </>
  );
};

export default EPageAddListing1;
