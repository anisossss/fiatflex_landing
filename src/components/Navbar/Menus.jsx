import React from "react";

export default function Menus() {
  return (
    <>
      <div className="w-full">
        <a href="/" className=" hover:text-[#239d94] py-2 block">
          Accueil
        </a>
      </div>
      <div className="w-full">
        <a href="/solutions" className=" hover:text-[#239d94] py-2 block">
          Solutions
        </a>
      </div>
      <div className="w-full">
        <a href="/tarifs" className=" hover:text-[#239d94] py-2 block">
          Tarification
        </a>
      </div>
      <div className="w-full">
        <a href="/crypto" className=" hover:text-[#239d94] py-2 block">
          Cryptomonnaies
        </a>
      </div>
      <div className="w-full">
        <a href="/contact" className=" hover:text-[#239d94] py-2 block">
          Contact
        </a>
      </div>
    </>
  );
}
