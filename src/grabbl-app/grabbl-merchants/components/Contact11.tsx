"use client";

import { Button, Input, Label } from "@relume_io/relume-ui";
import { BiEnvelope, BiMap, BiPhone, BiChevronDown } from "react-icons/bi"; // Import the dropdown icon
import { useState, useEffect, useRef } from "react";

export function Contact11() {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to toggle dropdown visibility
  const dropdownRef = useRef<HTMLDivElement>(null); // Ref for the dropdown container

  const toggleOption = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option) // Remove if already selected
        : [...prev, option] // Add if not selected
    );
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false); // Close the dropdown
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section id="contact" className="px-[5%] py-16 md:py-24 lg:py-28 bg--100">
      <div className="container">
        <div className="rb-12 mb-8 max-w-lg md:mb-12">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-6xl">
            Partner with Grabbl
          </h2>
          <p className="md:text-md">We'd love to hear from you!</p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-[1fr_1fr] md:gap-x-20 md:gap-y-16">
          <form className="grid grid-cols-1 gap-6">
            <div className="grid grid-cols-2 gap-4 w-full items-center">
              <div>
                <Label htmlFor="first-name" className="mb-2">
                  First Name
                </Label>
                <Input type="text" id="first-name" />
              </div>
              <div>
                <Label htmlFor="last-name" className="mb-2">
                  Last Name
                </Label>
                <Input type="text" id="last-name" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full items-center">
              <div>
                <Label htmlFor="email" className="mb-2">
                  Email
                </Label>
                <Input type="email" id="email" />
              </div>
              <div>
                <Label htmlFor="phone" className="mb-2">
                  Phone
                </Label>
                <Input type="tel" id="phone" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full items-center">
              <div>
                <Label htmlFor="store" className="mb-2">
                  Store Name
                </Label>
                <Input type="text" id="store" />
              </div>
              <div>
                <Label htmlFor="delivery_options" className="mb-2">
                  How do you deliver?
                </Label>
                <div className="relative" ref={dropdownRef}>
                  {/* Dropdown Trigger */}
                  <div
                    className="border border-black p-2 w-full cursor-pointer flex items-center justify-between"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown visibility
                  >
                    <span
                      className={`${
                        selectedOptions.length === 0 ? "text-gray-400" : "text-black"
                      }`}
                    >
                      {selectedOptions.length > 0
                        ? selectedOptions.join(", ")
                        : "Select options"}
                    </span>
                    <BiChevronDown className="text-lg" /> {/* Dropdown icon */}
                  </div>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && ( // Show dropdown only if `isDropdownOpen` is true
                    <div className="absolute left-0 top-full mt-2 w-full bg-white border border-black rounded-md shadow-lg z-10">
                      {["None", "UberEats", "DoorDash", "In-Store"].map((option) => (
                        <div
                          key={option}
                          className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100"
                          onClick={() => toggleOption(option)}
                        >
                          <span
                            className={`w-4 h-4 border-2 border-black rounded-full ${
                              selectedOptions.includes(option)
                                ? "bg-[#D40C0C]"
                                : "bg-white"
                            }`}
                          ></span>
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div>
              <Button className="bg-[#D40C0C] text-white hover:bg-gray-900 border-none" title="Submit">
                Submit
              </Button>
            </div>
          </form>
          <div className="mb-auto grid gap-x-4 gap-y-10 py-2 sm:grid-cols-3">
            <div>
              <div className="mb-3 md:mb-4">
                <BiEnvelope className="size-8" />
              </div>
              <h3 className="mb-2 text-md leading-[1.4] font-bold md:text-xl">
                Email
              </h3>
              <p className="mb-2">Reach us at:</p>
              <a className="underline" href="#">
                support@grabbl.com
              </a>
            </div>
            <div>
              <div className="mb-3 md:mb-4">
                <BiPhone className="size-8" />
              </div>
              <h3 className="mb-2 text-md leading-[1.4] font-bold md:text-xl">
                Phone
              </h3>
              <p className="mb-2">Call us at:</p>
              <a className="underline" href="#">
                +1 (920) 629-2941
              </a>
            </div>
            <div>
              <div className="mb-3 md:mb-4">
                <BiMap className="size-8" />
              </div>
              <h3 className="mb-2 text-md leading-[1.4] font-bold md:text-xl">
                Office
              </h3>
              <p className="mb-2"> 1370 Hazelwood Dr #214</p>
              <a className="underline" href="https://www.google.com/maps?q=1370+Hazelwood+Dr+%23214,+Smyrna+TN+37167" target="_blank" rel="noopener noreferrer">
                Smyrna TN 37167
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}