import React, { FC } from "react";

export interface SaleOffBadgeProps {
  className?: string;
  desc?: string;
  bgClass?: string;
}

const SaleOffBadge: FC<SaleOffBadgeProps> = ({
  className = "",
  desc = "-10% today",
  bgClass = "bg-red-700",
}) => {
  return (
    <div
      className={`nc-SaleOffBadge flex items-center justify-center text-xs py-0.5 px-3 ${bgClass} text-red-50 rounded-full ${className}`}
      data-nc-id="SaleOffBadge"
    >
      {desc}
    </div>
  );
};

export default SaleOffBadge;
