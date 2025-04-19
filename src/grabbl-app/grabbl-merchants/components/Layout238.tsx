"use client";

import { Button } from "@relume_io/relume-ui";



export function Layout238() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg">
            <h2 className="text-4xl leading-[1.2] font-bold md:text-5xl lg:text-4xl">
              Easy Onboarding: Get Started in Just a Few Clicks
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <img
                src="/alcicon.svg"
                alt="Relume logo"
                className="w-30 h-30 transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl">
              Effortless Inventory Management: Keep Track of Your Products with
              Ease
            </h3>


          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <img
                src="/money.svg"
                alt="Relume logo"
                className="w-30 h-30 transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl">
              Competitive Commission: Only 10% Fee on Each Sale You Make
            </h3>

            <div className="mt-6 flex flex-wrap items-center gap-6 md:mt-8 md:flex hidden">
              <a href="#contact">
                <Button
                  variant="link"
                  size="link"
                  className="flex items-center gap-2 border border-black px-4 py-2 transition-transform duration-300 hover:scale-110"
                >
                  Apply in 1 minute
                </Button>
              </a>
              <Button
                className="bg-[#D40C0C] text-white hover:bg-gray-900 border-none px-4 py-2 transition-transform duration-300 hover:scale-110"
              >
                Download Store App
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <img
                src="/iphone.svg"
                alt="Relume logo"
                className="w-30 h-30 transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl">
              Flexible Delivery Options: Choose Your Preferred Method for
              Customer Satisfaction
            </h3>
          </div>

          {/* Buttons for mobile */}
          <div className="mt-6 flex flex-col items-center gap-4 md:hidden">
            <a href="#contact">
              <Button
                variant="link"
                size="link"
                className="flex items-center gap-2 border border-black px-4 py-2 transition-transform duration-300 hover:scale-110"
              >
                Apply in 1 minute
              </Button>
            </a>
            <Button
              className="bg-[#D40C0C] text-white hover:bg-gray-900 border-none px-4 py-2 transition-transform duration-300 hover:scale-110"
            >
              Download Store App
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}