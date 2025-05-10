"use client";

import { Button } from "@relume_io/relume-ui";


export function Header65() {
  return (
    <section id="relume" className="relative px-[5%] py-8 md:py-12 lg:py-16">
      <div className="relative z-10 container max-w-lg text-center">
        <div className="flex justify-center mb-6">
          <img
              src="/indianowner.jpg"
              className="w-1/2 rounded-xl object-cover border-[3px] border-white"
              alt="Relume placeholder image"
            />
        </div>
        <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-6xl">
          Partner with Grabbl Store
        </h1>
        <p className="text-text-alternative md:text-md">
          Unlock new revenue streams and streamline your sales with the Grabbl Store app.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
          <a href="#contact">
            <Button
              className="bg-[#D40C0C] text-white hover:bg-gray-900 border-none"
              title="Button"
            >
              Partner
            </Button>
          </a>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/join_grabbl.png"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>
    </section>
  );
}