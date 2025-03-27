import React from "react";
import classNames from "classnames";

export default function SecondaryButton({ children, className, ...props }) {
  return (
    <button
      className={classNames(
        "group relative py-3 px-6 bg-white text-[#239d94] border border-[#239d94] rounded-lg font-medium overflow-hidden transition-all duration-300 hover:shadow-md",
        className
      )}
      {...props}
    >
      {/* Button content */}
      <span className="relative z-10">{children}</span>

      {/* Hover background effect */}
      <span className="absolute inset-0 bg-[#239d94]/5 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
    </button>
  );
}
