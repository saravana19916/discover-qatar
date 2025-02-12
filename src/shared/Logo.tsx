import React from "react";
import logoImg from "@/images/logo.png";
import logoLightImg from "@/images/logo-light.png";
import LogoSvgLight from "./LogoSvgLight";
import LogoSvg from "./LogoSvg";
import Link from "next/link";
import { StaticImageData } from "next/image";

export interface LogoProps {
  img?: StaticImageData;
  imgLight?: StaticImageData;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  img = logoImg,
  imgLight = logoLightImg,
  className = "w-24",
}) => {
  return (
    <Link
      href="/"
      className={`ttnc-logo inline-block text-primary-6000 focus:outline-none focus:ring-0 ${className}`}
    >
      {/* <LogoSvgLight /> */}
      {/* <LogoSvg /> */}

      {/* THIS USE FOR MY CLIENT */}
      {/* PLEASE UN COMMENT BELLOW CODE AND USE IT */}
      {img ? (
        <img
          className={`block ${imgLight ? "dark:hidden" : ""}`}
          src={img.src}
          alt="Logo"
        />
      ) : (
        "Logo Here"
      )}
      {imgLight && (
        <img
          className="hidden dark:block"
          src={imgLight.src}
          alt="Logo-Light"
        />
      )}
    </Link>
  );
};

export default Logo;
