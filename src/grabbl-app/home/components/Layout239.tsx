"use client";

import { Button } from "@relume_io/relume-ui";



export function Layout239() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              
          <h1 className="text-[64px] leading-[72px] font-bold tracking-tight text-black mb-6">
            Faster, Cheaper, Delivery
            <br />
            for Alcohol and Snacks
          </h1>
              <p className="text-lg text-gray-600 mb-6 max-w-xl mx-auto">
                Grabbl makes shopping for alcohol and snacks effortless with our
                user-friendly app. Enjoy competitive prices and swift delivery
                right to your door.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-6 mb-6 md:mb-8">
                <img
                  src="/Storefront.svg"
                  alt="Relume placeholder image"
                  className="rounded-image"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-3xl">
                Intuitive and User-Friendly App Interface
              </h3>
              
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-6 mb-6 md:mb-8">
                <img
                  src="iphone.svg"
                  alt="Relume placeholder image"
                  className="rounded-image"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-3xl">
                Affordable Prices for Your Favorite Items
              </h3>
              
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-6 mb-6 md:mb-8">
                <img
                  src="alcicon.svg"
                  alt="Relume placeholder image"
                  className="rounded-image"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-3xl">
                Quick Delivery Options to Suit Your Needs
              </h3>
              
            </div>
          </div>
        

        </div>
        <div className="flex justify-center gap-4 mb-16">
              <Button title="Download" className="bg-[#D40C0C] text-white transform transition-transform duration-200 hover:scale-105 border-none">
              Download
              </Button>
              <Button title="Learn More" variant="tertiary" className="bg-gray-200 hover:bg-black hover:text-white transition-colors duration-200">
                Learn More
              </Button>
        </div>
      </div>
    </section>
  );
}