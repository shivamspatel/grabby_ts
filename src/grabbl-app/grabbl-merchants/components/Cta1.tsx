"use client";

import { Button } from "@relume_io/relume-ui";

export function Cta1() {
  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-black text-white" // Added bg-black and text-white
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-5xl">
              Join the Grabbl Merchant Network
            </h2>
            <p className="md:text-md">
              Unlock new revenue streams by becoming a merchant on Grabbl and
              reaching more customers today!
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <a href="#contact">
                <Button
                  variant="link"
                  size="link"
                  className="flex items-center gap-2 border border-white px-4 py-2 text-white transition-transform duration-300 hover:scale-110"
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
          <div>
            <img
              src="/indianowner.jpg"
              className="w-full rounded-xl object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}