import { ThemeToggle } from "@/components/ThemeToggle";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center h-24 w-full lg:px-20 px-8">
      <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 text-[#FACC15]">
        Trimm
      </h1>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
