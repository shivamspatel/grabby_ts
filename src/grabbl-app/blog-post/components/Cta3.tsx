"use client";

import { Button } from "@relume_io/relume-ui";

export function Cta3() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container">
        <div className="w-full max-w-lg">
          <h2 className="mb-5 text-5xl font-bold text-text-alternative md:mb-6 md:text-7xl lg:text-6xl">
            Get Your Grabbl App Today
          </h2>
          <p className="text-text-alternative md:text-md">
            Download Grabbl now for fast, affordable alcohol and snacks
            delivered right to your door!
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
             <Button title="Download" className="bg-[#D40C0C] text-white rounded-xl transform transition-transform duration-200 hover:scale-105 border-none">
  Download
              </Button>
              <Button title="Learn More" variant="secondary-alt" className="rounded-xl hover:bg-black  transition-colors duration-200">
                Learn More
              </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/backgroundblog.jpg"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}