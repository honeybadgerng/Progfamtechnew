import type { NextPage } from "next";
import { Button } from "@chakra-ui/react";

export type TECHNEWType = {
  className?: string;
};

const TECHNEW: NextPage<TECHNEWType> = ({ className = "" }) => {
  return (
    <Button
      className={`cursor-pointer [border:none] p-0 bg-[transparent] relative whitespace-nowrap z-[1] ${className}`}
    />
  );
};

export default TECHNEW;
