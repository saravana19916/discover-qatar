"use client";

import Button, { ButtonProps } from "./Button";
import React from "react";

export interface ButtonSecondaryProps extends ButtonProps {}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
  className = " ",
  ...args
}) => {
  return (
    <Button
      className={`ttnc-ButtonSecondary font-medium border bg-white border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-secondary-400 dark:border-secondary-700 hover:bg-secondary-100 dark:hover:bg-neutral-800 ${className}`}
      {...args}
    />
  );
};

export default ButtonSecondary;
