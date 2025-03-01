"use client";

import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";
import { PathName } from "@/routers/types";
import Link from "next/link";

interface SolutionItem {
  name: string;
  description: string;
  href: PathName;
  icon: any;
  active?: boolean;
}

const solutions: SolutionItem[] = [
  {
    name: "Events & Experiences",
    description: "Explore all events and experiences",
    href: "/listing-experiences",
    icon: IconFour,
  },
  {
    name: "Cruises",
    description: "Explore all cruise offers",
    href: "/listing-car",
    icon: IconThree,
  },
  {
    name: "Hotels",
    description: "Explore all hotel offers",
    href: "/listing-stay",
    active: true,
    icon: IconOne,
  },
  {
    name: "Accommodation",
    description: "Explore private accommodation offers",
    href: "/listing-real-estate",
    icon: IconTwo,
  },
  {
    name : "Flights" ,
    description: "Explore all flight offers",
    href:"/listing-flights",
    icon: IconFive,
  },
];

export default function DropdownTravelers() {
  return (
    <Popover className="DropdownTravelers relative flex">
      {({ open, close }) => (
        <>
          <Popover.Button
            className={`${open ? "" : "text-opacity-90"}
                group self-center py-2 h-10 sm:h-12 rounded-md text-sm sm:text-base font-medium hover:text-opacity-100 focus:outline-none`}
          >
            <div className={` inline-flex items-center `} role="button">
              <span>Explore</span>
              <ChevronDownIcon
                className={`${open ? "-rotate-180" : "text-opacity-70 "}
                  ml-2 h-5 w-5 text-neutral-700 group-hover:text-opacity-80 transition ease-in-out duration-150 `}
                aria-hidden="true"
              />
            </div>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-40 w-screen max-w-xs px-4 top-full transform -translate-x-1/2 left-1/2 sm:px-0">
              <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid grid-cols-1 gap-7 bg-white dark:bg-neutral-800 p-7 ">
                  {solutions.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={() => close()}
                      className={`flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 ${
                        item.active ? "bg-neutral-100 dark:bg-neutral-700" : ""
                      }`}
                    >
                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-primary-50 rounded-md text-primary-500 sm:h-12 sm:w-12">
                        <item.icon aria-hidden="true" />
                      </div>
                      <div className="ml-4 space-y-0.5">
                        <p className="text-sm font-medium ">{item.name}</p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-300">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
                {/* FOOTER */}
                {/*<div className="p-4 bg-neutral-50 dark:bg-neutral-700">
                  <Link
                    href="/"
                    className="flow-root px-2 py-2 space-y-0.5 transition duration-150 ease-in-out rounded-md focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                  >
                    <span className="flex items-center">
                      <span className="text-sm font-medium ">
                        Documentation
                      </span>
                    </span>
                    <span className="block text-sm text-gray-500 dark:text-neutral-400">
                      Start integrating products and tools
                    </span>
                  </Link>
                </div>*/}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

function IconFour() {
  return (
    <svg
      className="w-7 h-7"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.0301 10.77L20.6901 6.97998C21.2601 6.59998 21.4101 5.81998 21.0301 5.25998L19.2101 2.54996C18.8301 1.97996 18.0501 1.82996 17.4901 2.20996L11.8301 5.99997L15.0301 10.77Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.1739 6.4792L7.39624 9.67908L9.95614 13.5012L14.7338 10.3013L12.1739 6.4792Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.83004 15.8999L9.78004 13.2599L7.54004 9.91992L3.59004 12.5599C3.13004 12.8699 3.01004 13.4899 3.32004 13.9499L4.45004 15.6299C4.75004 16.0799 5.37004 16.1999 5.83004 15.8999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0501 12.2L7.56006 21.9999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 12.2L16.44 21.9999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconTwo() {
  return (
    // <svg
    //   className="w-7 h-7"
    //   viewBox="0 0 24 24"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path
    //     d="M13 22H5C3 22 2 21 2 19V11C2 9 3 8 5 8H10V19C10 21 11 22 13 22Z"
    //     stroke="currentColor"
    //     strokeWidth="1.5"
    //     strokeMiterlimit="10"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //   />
    //   <path
    //     d="M10.11 4C10.03 4.3 10 4.63 10 5V8H5V6C5 4.9 5.9 4 7 4H10.11Z"
    //     stroke="currentColor"
    //     strokeWidth="1.5"
    //     strokeMiterlimit="10"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //   />
    //   <path
    //     d="M14 8V13"
    //     stroke="currentColor"
    //     strokeWidth="1.5"
    //     strokeMiterlimit="10"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //   />
    //   <path
    //     d="M18 8V13"
    //     stroke="currentColor"
    //     strokeWidth="1.5"
    //     strokeMiterlimit="10"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //   />
    //   <path
    //     d="M17 17H15C14.45 17 14 17.45 14 18V22H18V18C18 17.45 17.55 17 17 17Z"
    //     stroke="currentColor"
    //     strokeWidth="1.5"
    //     strokeMiterlimit="10"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //   />
    //   <path
    //     d="M6 13V17"
    //     stroke="currentColor"
    //     strokeWidth="1.5"
    //     strokeMiterlimit="10"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //   />
    //   <path
    //     d="M10 19V5C10 3 11 2 13 2H19C21 2 22 3 22 5V19C22 21 21 22 19 22H13C11 22 10 21 10 19Z"
    //     stroke="currentColor"
    //     strokeWidth="1.5"
    //     strokeMiterlimit="10"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //   />
    // </svg>

      <svg fill="none" width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke="currentColor" strokeWidth="1" d="M22,1H10A1,1,0,0,0,9,2V5H2A1,1,0,0,0,1,6V22a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V2A1,1,0,0,0,22,1ZM13,21H3V7H13Zm8,0H15V6a1,1,0,0,0-1-1H11V3H21ZM5,10A1,1,0,0,1,6,9h4a1,1,0,0,1,0,2H6A1,1,0,0,1,5,10Zm0,4a1,1,0,0,1,1-1h4a1,1,0,0,1,0,2H6A1,1,0,0,1,5,14Zm0,4a1,1,0,0,1,1-1h4a1,1,0,0,1,0,2H6A1,1,0,0,1,5,18Z"/>
        </svg>
  );
}

function IconThree() {
  return (
    // <svg
    //   className="w-7 h-7"
    //   viewBox="0 0 24 24"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path
    //     d="M15.51 2.82996H8.49C6 2.82996 5.45 4.06996 5.13 5.58996L4 11H20L18.87 5.58996C18.55 4.06996 18 2.82996 15.51 2.82996Z"
    //     stroke="currentColor"
    //     strokeWidth="1.5"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //   />
    //   <path
    //     d="M21.99 19.82C22.1 20.99 21.16 22 19.96 22H18.08C17 22 16.85 21.54 16.66 20.97L16.46 20.37C16.18 19.55 16 19 14.56 19H9.43998C7.99998 19 7.78998 19.62 7.53998 20.37L7.33998 20.97C7.14998 21.54 6.99998 22 5.91998 22H4.03998C2.83998 22 1.89998 20.99 2.00998 19.82L2.56998 13.73C2.70998 12.23 2.99998 11 5.61998 11H18.38C21 11 21.29 12.23 21.43 13.73L21.99 19.82Z"
    //     stroke="currentColor"
    //     strokeWidth="1.5"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //   />
    //   <path
    //     d="M4 8H3"
    //     stroke="currentColor"
    //     strokeWidth="1.5"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //   />
    //   <path
    //     d="M21 8H20"
    //     stroke="currentColor"
    //     strokeWidth="1.5"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //   />
    //   <path
    //     d="M12 3V5"
    //     stroke="currentColor"
    //     strokeWidth="1.5"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //   />
    //   <path
    //     d="M10.5 5H13.5"
    //     stroke="currentColor"
    //     strokeWidth="1.5"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //   />
    //   <path
    //     d="M6 15H9"
    //     stroke="currentColor"
    //     strokeWidth="1.5"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //   />
    //   <path
    //     d="M15 15H18"
    //     stroke="currentColor"
    //     strokeWidth="1.5"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //   />
    // </svg>

    <svg fill="currentColor" viewBox="0 0 512 512" width="32" height="32">
    <g>
      <g>
        <g>
          <rect x="135.995" y="152.159" width="16.001" height="15.674"/>
          <rect x="168.001" y="152.159" width="16.001" height="15.674"/>
          <rect x="199.996" y="152.159" width="16.001" height="15.674"/>
          <rect x="232.002" y="152.159" width="16" height="15.674"/>
          <rect x="263.997" y="152.159" width="16.001" height="15.674"/>
          <rect x="296.002" y="152.159" width="16.001" height="15.674"/>
          <rect x="327.997" y="152.159" width="16.001" height="15.674"/>
          <rect x="360.003" y="152.159" width="16" height="15.674"/>
          <rect x="183.1" y="0.162" width="144.657" height="15.674"/>
          <rect x="368.164" y="7.999" width="15.674" height="16.001"/>
          <path d="M385.036,424.161c32.784-19.519,54.801-55.315,54.801-96.162v-60.843l-32-16.001V112.161H104.163v138.994l-32,16v60.843
            c0,40.848,22.016,76.644,54.801,96.163H0v15.674h512v-15.674H385.036z M119.837,127.835h272.326v64.327H289.849l-33.85-16.924
            l-33.849,16.924H119.837V127.835z M392.162,207.836v35.483l-70.966-35.483H392.162z M119.837,207.836h70.966l-70.966,35.483
            V207.836z M87.837,276.843L256,192.761l168.164,84.082v22.476L256,215.237L87.837,299.319V276.843z M183.999,424.162
            c-53.025,0-96.163-43.138-96.163-96.163v-11.156l168.163-84.082l168.164,84.082v11.156c0,53.025-43.138,96.163-96.163,96.163
            H183.999z"/>
          <path d="M408,88.162h-0.001h-24.164V31.999h-15.674v56.163h-40.326v-64H184.163v64h-40.326V31.999h-15.674v56.163H104v15.674h304
            V88.162z M312.163,88.162H199.837V39.836h112.326V88.162z"/>
          <rect x="128.158" y="7.999" width="15.674" height="16.001"/>
          <rect x="64.001" y="456.165" width="39.999" height="15.674"/>
          <rect x="112.004" y="480.156" width="79.998" height="15.674"/>
          <rect x="24" y="480.156" width="24" height="15.674"/>
          <rect x="247.999" y="464.159" width="24.001" height="15.674"/>
          <rect x="279.994" y="480.156" width="72" height="15.674"/>
          <rect x="360.003" y="496.164" width="24" height="15.674"/>
          <rect x="416" y="464.159" width="95.996" height="15.674"/>
        </g>
      </g>
    </g>
    </svg>
  );
}

function IconOne() {
  return (
    <svg
      className="w-7 h-7"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.22 2H8.96005C8.56005 2 8.18002 2.14 7.87002 2.38L5.68002 4.13C4.80002 4.83 4.80002 6.15999 5.68002 6.85999L7.87002 8.60999C8.18002 8.85999 8.57005 8.98999 8.96005 8.98999H17.22C18.19 8.98999 18.97 8.20999 18.97 7.23999V3.73999C18.97 2.77999 18.19 2 17.22 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.79999 12H15.06C15.46 12 15.84 12.14 16.15 12.38L18.34 14.13C19.22 14.83 19.22 16.16 18.34 16.86L16.15 18.61C15.84 18.86 15.45 18.99 15.06 18.99H6.79999C5.82999 18.99 5.04999 18.21 5.04999 17.24V13.74C5.04999 12.78 5.82999 12 6.79999 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 12V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 22V19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 22H15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconFive() {
  return (
    <svg fill="currentColor" viewBox="0 0 512 512" width="32" height="32">
    <g>
      <g>
        <g>
          <rect x="105.792" y="260.194" width="15.938" height="15.527"/>
          <rect x="137.664" y="260.194" width="15.937" height="15.527"/>
          <rect x="169.546" y="260.194" width="15.937" height="15.527"/>
          <rect x="201.418" y="260.194" width="15.937" height="15.527"/>
          <rect x="233.29" y="260.194" width="15.937" height="15.527"/>
          <rect x="265.173" y="260.194" width="15.938" height="15.527"/>
          <rect x="297.045" y="260.194" width="15.937" height="15.527"/>
          <rect x="328.917" y="260.194" width="15.937" height="15.527"/>
          <rect x="360.8" y="260.194" width="15.937" height="15.527"/>
          <polygon points="233.089,116.339 249.232,116.339 249.232,100.812 233.089,100.812 233.089,84.464 249.232,84.464 
            249.232,68.936 233.089,68.936 233.089,36.65 251.448,36.65 305.556,214.431 320.409,209.911 262.951,21.123 217.561,21.123 
            217.561,212.171 233.089,212.171       "/>
          <path d="M475.716,268.299l-36.368-36.368c-7.472-7.472-17.406-11.586-27.972-11.586H102.282l-17.913-30.707l0.083,0.016
            l14.704-80.873H60.017l-7.269,26.652l-6.25-10.714H2.401v138.7l11.213,10.193L0,323.53h39.508l7.209-19.824l48.103,43.731h122.74
            v143.44h45.391l43.656-143.44h169.379c19.858,0,36.014-16.156,36.014-36.013v-3.626C512,287.07,496.01,270.008,475.716,268.299z
             M71.877,124.307h8.674l-8.149,44.817l-8.687-14.893L71.877,124.307z M28.633,308.003h-8.304l19.672-72.131h14.862
            L28.633,308.003z M100.823,331.91l-9.218-8.38H217.56v8.38H100.823z M305.556,297.569l-54.108,177.782h-18.359v-32.286h16.143
            v-15.527h-16.143v-16.348h16.143v-15.527h-16.143V291.86h-15.527v16.143H74.526l-22.074-20.067l24.58-67.591h-48.89L18.2,256.797
            l-0.271-0.247V140.245h19.652l55.783,95.627h318.013c6.419,0,12.454,2.5,16.993,7.039l17.279,17.279h-29.071v15.527h44.598
            l0.782,0.781l-25.204,31.505H318.609l1.8-5.914L305.556,297.569z M475.986,331.91H311.333l2.551-8.38h130.332l31.667-39.585
            c11.632,1.71,20.589,11.753,20.589,23.852v3.627h0.001C496.473,322.72,487.283,331.91,475.986,331.91z"/>
        </g>
      </g>
    </g>
    </svg>
  );
}