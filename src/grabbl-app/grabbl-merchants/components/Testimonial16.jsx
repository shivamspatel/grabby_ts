"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Dialog,
  DialogContent,
  DialogTrigger,
  VideoIframe,
} from "@relume_io/relume-ui";
import React, { useEffect, useState } from "react";
import { BiSolidStar } from "react-icons/bi";
import { FaCirclePlay } from "react-icons/fa6";


export function Testimonial16() {
  const useCarouse = () => {
    const [api, setApi] = useState();
    const [current, setCurrent] = useState(0);
  
    useEffect(() => {
      if (!api) {
        return;
      }
      setCurrent(api.selectedScrollSnap() + 1);
      api.on("select", () => {
        setCurrent(api.selectedScrollSnap() + 1);
      });
    }, [api]);
  
    const handleDotClick = (index) => () => {
      // No TypeScript annotation
      if (api) {
        api.scrollTo(index);
      }
    };
  
    const dotClassName = (index) => {
      return `mx-[3px] inline-block size-2 rounded-full ${
        current === index + 1 ? "bg-black" : "bg-neutral-light"
      }`;
    };
  
    return { api, setApi, current, handleDotClick, dotClassName };
  };

  const useCarousel = useCarouse();
  return (
    <section id="storereviews" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        {/* Title and Description */}
        <div className="mb-12 w-full md:mb-18 lg:mb-20">
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-6xl">
            Merchant Testimonials
          </h1>
          <p className="md:text-md">
            Grabbl has transformed our business operations!
          </p>
        </div>

        {/* Carousel Component */}
        <Carousel
          setApi={useCarousel.setApi}
          opts={{ loop: true, align: "start" }}
          className="overflow-hidden"
        >
          <div className="relative pt-20 md:pt-0 md:pb-20">
            <CarouselContent className="ml-0">
              <CarouselItem className="pl-0">
                <div className="grid w-full auto-cols-fr grid-cols-1 items-center justify-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-x-20">
                  <div className="order-last md:order-first">
                    <Dialog>
                      <DialogTrigger className="relative flex w-full items-center justify-center overflow-hidden rounded-image">
                        <img
                          src="/gettyimages-924149462-612x612.jpg"
                          alt="Testimonial image 1"
                          className="size-full object-cover"
                        />
                        <span className="absolute inset-0 z-10 bg-black/50" />
                        {/* <FaCirclePlay className="absolute z-20 size-16 text-white" /> */}
                      </DialogTrigger>
                      {/* <DialogContent>
                        <VideoIframe video="https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW" />
                      </DialogContent> */}
                    </Dialog>
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="mb-6 flex md:mb-8">
                      <BiSolidStar className="size-6 text-[#FAC600]" />
                      <BiSolidStar className="size-6 text-[#FAC600]" />
                      <BiSolidStar className="size-6 text-[#FAC600]" />
                      <BiSolidStar className="size-6 text-[#FAC600]" />
                      <BiSolidStar className="size-6 text-[#FAC600]" />
                    </div>
                    <blockquote className="text-xl font-bold md:text-2xl">
                      "Using Grabbl has completely transformed my late-night
                      snack runs! It's fast, affordable, and I love the
                      convenience of ordering everything from one app."
                    </blockquote>
                    <div className="mt-6 flex flex-nowrap items-center gap-5 md:mt-8">
                      <div>
                        <p className="font-semibold">Mike Patel</p>
                        <p>Liquor Store Owner</p>
                      </div>
                      <div className="mx-4 w-px self-stretch bg-background-alternative sm:mx-0" />
                      <div>
                        <img
                          src="/legacy.png"
                          alt="Webflow logo 1"
                          className="max-h-12"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="pl-0">
                <div className="grid w-full auto-cols-fr grid-cols-1 items-center justify-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-x-20">
                  <div className="order-last md:order-first">
                    <Dialog>
                      <DialogTrigger className="relative flex w-full items-center justify-center overflow-hidden rounded-image">
                        <img
                          src="/man-is-holding-bottle-and-smiling-wine-shop-owner-2025-03-18-22-02-02-utc.JPG"
                          alt="Testimonial image 1"
                          className="size-full object-cover"
                        />
                        <span className="absolute inset-0 z-10 bg-black/50" />
                        {/* <FaCirclePlay className="absolute z-20 size-16 text-white" /> */}
                      </DialogTrigger>
                      <DialogContent>
                        {/* <VideoIframe video="https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW" /> */}
                      </DialogContent>
                    </Dialog>
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="mb-6 flex md:mb-8">
                      <BiSolidStar className="size-6 text-[#FAC600]" />
                      <BiSolidStar className="size-6 text-[#FAC600]" />
                      <BiSolidStar className="size-6 text-[#FAC600]" />
                      <BiSolidStar className="size-6 text-[#FAC600]" />
                      <BiSolidStar className="size-6 text-[#FAC600]" />
                    </div>
                    <blockquote className="text-xl font-bold md:text-2xl">
                      "Using Grabbl has completely transformed my late-night
                      snack runs! It's fast, affordable, and I love the
                      convenience of ordering everything from one app."
                    </blockquote>
                    <div className="mt-6 flex flex-nowrap items-center gap-5 md:mt-8">
                      <div>
                        <p className="font-semibold">Kevin Johnson</p>
                        <p>Liquor Store Owner</p>
                      </div>
                      <div className="mx-4 w-px self-stretch bg-background-alternative sm:mx-0" />
                      <div>
                        <img
                          src="/liquorplanet.avif"
                          alt="Webflow logo 1"
                          className="max-h-12"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className="absolute top-0 flex w-full items-start justify-between md:top-auto md:bottom-0 md:items-end">
              <div className="mt-2.5 flex w-full items-start justify-start md:mt-0 md:mb-2.5">
                <button
                  onClick={useCarousel.handleDotClick(0)}
                  className={useCarousel.dotClassName(0)}
                />
                <button
                  onClick={useCarousel.handleDotClick(1)}
                  className={useCarousel.dotClassName(1)}
                />
              </div>
              <div className="flex items-end justify-end gap-2 md:gap-4">
                <CarouselPrevious className="static top-0 right-0 size-12 -translate-y-0" />
                <CarouselNext className="static top-0 right-0 size-12 -translate-y-0" />
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}