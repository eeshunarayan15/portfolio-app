import React, { useState, useEffect } from "react";
import Navbarlogo from "./Navbarlogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="max-w-[1300px] mx-auto px-4">
        <div className="relative flex items-center justify-between bg-[#1e1917] p-4 md:p-6 rounded-full border-[0.5px] border-orange-500 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Navbarlogo />

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavbarLinks menu={true} />
          </div>

          <div className="hidden md:block">
            <NavbarBtn />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenu(!menu)}
            className="md:hidden p-2 rounded-full border border-orange-400 text-white hover:bg-orange-400/10 transition-colors"
          >
            <Menu size={24} />
          </button>

          {/* Mobile Navigation */}
          <div
            className={`
            absolute top-full left-0 right-0 mt-2 p-4 bg-[#1e1917] rounded-2xl border-[0.5px] border-orange-500
            transform transition-all duration-300 md:hidden
            ${
              menu
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }
          `}
          >
            <NavbarLinks menu={menu} />
            <div className="mt-4 flex justify-center">
              <NavbarBtn />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
