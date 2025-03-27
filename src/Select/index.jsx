import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import classNames from "classnames";
import ClickOutComponent from "react-onclickout";

export default function Select({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || "EUR");

  const options = [
    { value: "EUR", label: "EUR" },
    { value: "USDT", label: "USDT" },
    { value: "USDC", label: "USDC" },
    { value: "SOL", label: "SOL" },
    { value: "EUROC", label: "EUROC" },
  ];

  const handleSelect = (option) => {
    setSelectedValue(option.value);
    setOpen(false);
    if (onChange) {
      onChange(option.value);
    }
  };

  return (
    <div className="relative">
      <ClickOutComponent onClickOut={() => setOpen(false)}>
        <button
          className="border border-primary rounded-2xl py-3 md:py-4 px-4 md:px-6 flex items-center justify-between min-w-[120px]"
          onClick={() => setOpen(!open)}
        >
          {selectedValue}
          <BsChevronDown
            className={classNames("ml-2", { "rotate-180": open })}
          />
        </button>

        <div
          className={classNames(
            "absolute top-full mt-1 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-10 w-full",
            {
              hidden: !open,
              block: open,
            }
          )}
        >
          {options.map((option) => (
            <div
              key={option.value}
              className={classNames(
                "px-4 py-2 cursor-pointer hover:bg-gray-100",
                {
                  "bg-primary bg-opacity-10": selectedValue === option.value,
                }
              )}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      </ClickOutComponent>
    </div>
  );
}
