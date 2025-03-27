import React from "react";
import classNames from "classnames";

export default function PrimaryButton({ children, className, ...props }) {
  return (
    <button
      className={classNames(
        "relative py-3 px-6 bg-gradient-to-r from-[#239d94] to-[#2dd4c8] text-white rounded-lg font-medium overflow-hidden transition-all duration-300 hover:shadow-lg group",
        className
      )}
      {...props}
    >
      {/* Animated shine effect */}
      <span className="absolute top-0 left-0 w-full h-full bg-white opacity-20 transform -translate-x-full skew-x-12 transition-transform duration-700 group-hover:translate-x-[200%] z-0"></span>

      {/* Button content (remains visible) */}
      <span className="relative z-10">{children}</span>

      {/* Subtle gradient hover effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-[#1a7b74] to-[#239d94] opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-lg z-0"></span>
    </button>
  );
}
