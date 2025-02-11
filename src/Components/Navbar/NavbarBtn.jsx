import React from "react";
import { ArrowDownRight } from "lucide-react";

const NavbarBtn = () => {
  return (
    <button
      className="
      px-4 py-2 text-sm md:text-base font-bold text-white
      rounded-full border border-cyan-500
      bg-gradient-to-r from-cyan-400 to-orange-400
      hover:scale-105 hover:shadow-lg hover:shadow-cyan-200/50
      hover:border-orange-400
      transition-all duration-300
      flex items-center gap-2
    "
    >
      Hire Me
      <ArrowDownRight size={18} />
    </button>
  );
};

export default NavbarBtn;
