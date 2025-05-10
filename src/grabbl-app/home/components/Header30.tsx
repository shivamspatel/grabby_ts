"use client";

import { Button } from "@relume_io/relume-ui";


export function Header30() {
  return (
    <section id="relume" className="relative px-[5%]">
      <div className="relative z-10 container">
        <div className="flex max-h-[60rem] min-h-svh items-center justify-center py-16 text-center md:py-24 lg:py-28">
          <div className="w-full max-w-lg">
            <h1 className="mb-5 text-6xl font-bold text-white md:mb-6 md:text-8xl lg:text-[4.4rem]">
              Get Your Favorite Drinks Delivered Fast
            </h1>
            <p className="text-text-alternative md:text-md text-white">
              With Grabbl, buying alcohol and snacks is easier and more
              affordable than ever. Enjoy quick delivery from local stores at
              prices that beat the competition.
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
              <Button title="Download" className="bg-[#D40C0C] text-white transform transition-transform duration-200 hover:scale-105 border-none">
  Download
              </Button>
              <Button title="Learn More" variant="secondary-alt" className="hover:bg-black transition-colors duration-200">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/header_background.png"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
    </section>
  );
}