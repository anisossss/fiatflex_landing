import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { BsChevronDown, BsList, BsX } from "react-icons/bs";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import { useMediaQuery } from "react-responsive";
import Menus from "./Menus";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [backgroundWhite, setBackgroundWhite] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: "768px" });

  const handleWindowScroll = () => {
    const height = window.scrollY;
    setBackgroundWhite(height > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  return (
    <nav
      className={classNames(
        "fixed w-full transition-all duration-500 z-50 py-6 px-4",
        {
          "bg-white/80 backdrop-blur-md shadow-lg py-4": backgroundWhite,
        }
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo & Desktop Menu */}
        <div className="flex items-center">
          <img
            src={"/assets/logo.svg"}
            className="mr-6"
            alt="Neva"
            width={60}
          />
          <div className="hidden xl:flex gap-8">
            <Menus />
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          <SecondaryButton>Sign In</SecondaryButton>
          <PrimaryButton>Sign Up</PrimaryButton>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-2xl">
          <button
            className="p-3 rounded-lg transition-all"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {dropdownOpen ? <BsX /> : <BsList />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={classNames(
          "fixed inset-0 bg-black/50 transition-all duration-300",
          {
            "opacity-100 visible": dropdownOpen,
            "opacity-0 invisible": !dropdownOpen,
          }
        )}
        onClick={() => setDropdownOpen(false)}
      />

      <div
        className={classNames(
          "fixed top-0 right-0 h-full w-3/4 bg-white shadow-2xl transition-transform duration-500 flex flex-col p-6 md:hidden",
          {
            "translate-x-0": dropdownOpen,
            "translate-x-full": !dropdownOpen,
          }
        )}
      >
        <button
          className="self-end text-2xl mb-4"
          onClick={() => setDropdownOpen(false)}
        >
          <BsX />
        </button>
        <Menus />
        <div className="mt-auto flex flex-col gap-4">
          <SecondaryButton className="w-full">Sign In</SecondaryButton>
          <PrimaryButton className="w-full">Sign Up</PrimaryButton>
        </div>
      </div>
    </nav>
  );
}
