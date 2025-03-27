import React, { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-10">
      <button
        onClick={scrollToTop}
        className={`bg-gradient-to-r from-[#239d94] to-[#1b7b74] text-white p-3 rounded-full shadow-lg transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ display: isVisible ? "block" : "none" }}
      >
        <BsArrowUp size={20} />
      </button>
    </div>
  );
}
