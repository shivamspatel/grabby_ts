"use client";

import Card from "../components/Card";
import { BiSolidStar } from "react-icons/bi";

export function Testimonial18() {
  return (
    <section
      id="reviews"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-gray-300" 
    >
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Grabbl App Reviews
          </h1>
          <p className="md:text-md">The best way to get my favorite snacks!</p>
        </div>
        <div className="columns-1 gap-x-8 md:columns-2 lg:columns-3">
          <Card className="mb-8 inline-block w-full p-6 md:p-8">
            <div className="mb-5 flex md:mb-6">
              <BiSolidStar className="mr-1 size-6" style={{ color: "#FDAA32" }} />
              <BiSolidStar className="mr-1 size-6" style={{ color: "#FDAA32" }} />
              <BiSolidStar className="mr-1 size-6" style={{ color: "#FDAA32" }} />
              <BiSolidStar className="mr-1 size-6" style={{ color: "#FDAA32" }} />
              <BiSolidStar className="mr-1 size-6" style={{ color: "#FDAA32" }} />
            </div>
            <blockquote className="md:text-md">
              "Grabbl has made my late-night cravings so easy!"
            </blockquote>
            <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-fit md:flex-row md:items-center">
              <img
                src="/man_playstore_review.png"
                alt="Testimonial avatar"
                className="size-12 min-h-12 min-w-12 rounded-full object-cover overflow-visible"
              />
              <div>
                <p className="font-semibold">John Doe</p>
                <p>Happy Customer</p>
              </div>
            </div>
          </Card>
          <Card className="mb-8 inline-block w-full p-6 md:p-8">
            <div className="mb-5 flex md:mb-6">
              <BiSolidStar className="mr-1 size-6" style={{ color: "#FDAA32" }} />
              <BiSolidStar className="mr-1 size-6" style={{ color: "#FDAA32" }} />
              <BiSolidStar className="mr-1 size-6" style={{ color: "#FDAA32" }} />
              <BiSolidStar className="mr-1 size-6" style={{ color: "#FDAA32" }} />
              <BiSolidStar className="mr-1 size-6" style={{ color: "#FDAA32" }} />
            </div>
            <blockquote className="md:text-md">
              "I love how easy it is to order. The prices are unbeatable!"
            </blockquote>
            <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-fit md:flex-row md:items-center">
              <img
                src="/playstorereview.png"
                alt="Testimonial avatar"
                className="size-12 min-h-12 min-w-12 rounded-full object-cover overflow-visible"
              />
              <div>
                <p className="font-semibold">Jane Smith</p>
                <p>Frequent User</p>
              </div>
            </div>
          </Card>
          <Card className="mb-8 inline-block w-full p-6 md:p-8">
            <div className="mb-5 flex md:mb-6">
              <BiSolidStar className="mr-1 size-6" style={{ color: "#FDAA32" }} />
              <BiSolidStar className="mr-1 size-6" style={{ color: "#FDAA32" }} />
              <BiSolidStar className="mr-1 size-6" style={{ color: "#FDAA32" }} />
              <BiSolidStar className="mr-1 size-6" style={{ color: "#FDAA32" }} />
              <BiSolidStar className="mr-1 size-6" style={{ color: "#FDAA32" }} />
            </div>
            <blockquote className="md:text-md">
              "The selection is fantastic, and the prices are unbeatable!"
            </blockquote>
            <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-fit md:flex-row md:items-center">
              <img
                src="/girl_playstore.png"
                alt="Testimonial avatar"
                className="size-12 min-h-12 min-w-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">Tom Brown</p>
                <p>Local Resident</p>
              </div>
            </div>
          </Card>
          <Card className="mb-8 inline-block w-full p-6 md:p-8">
            <div className="mb-5 flex md:mb-6">
              <BiSolidStar className="mr-1 size-6" style={{ color: "#FDAA32" }} />
              <BiSolidStar className="mr-1 size-6" style={{ color: "#FDAA32" }} />
              <BiSolidStar className="mr-1 size-6" style={{ color: "#FDAA32" }} />
              <BiSolidStar className="mr-1 size-6" style={{ color: "#FDAA32" }} />
              <BiSolidStar className="mr-1 size-6" style={{ color: "#FDAA32" }} />
            </div>
            <blockquote className="md:text-md">
              "The app is super user-friendly. I save time and money!"
            </blockquote>
            <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-fit md:flex-row md:items-center">
              <img
                src="/woman_appstore.png"
                alt="Testimonial avatar"
                className="size-12 min-h-12 min-w-12 rounded-full object-cover overflow-visible"
              />
              <div>
                <p className="font-semibold">Emily White</p>
                <p>Satisfied Customer</p>
              </div>
            </div>
          </Card>
          <Card className="mb-8 inline-block w-full p-6 md:p-8">
            <div className="mb-5 flex md:mb-6">
              <BiSolidStar className="mr-1 size-6" style={{ color: "#FDAA32" }} />
              <BiSolidStar className="mr-1 size-6" style={{ color: "#FDAA32" }} />
              <BiSolidStar className="mr-1 size-6" style={{ color: "#FDAA32" }} />
              <BiSolidStar className="mr-1 size-6" style={{ color: "#FDAA32" }} />
              <BiSolidStar className="mr-1 size-6" style={{ color: "#FDAA32" }} />
            </div>
            <blockquote className="md:text-md">
              "Grabbl is a game changer for convenience!"
            </blockquote>
            <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-fit md:flex-row md:items-center">
              <img
                src="/appstorereview.svg"
                alt="Testimonial avatar"
                className="size-12 min-h-12 min-w-12 rounded-full object-cover overflow-visible"
              />
              <div>
                <p className="font-semibold">Mark Johnson</p>
                <p>Loyal User</p>
              </div>
            </div>
          </Card>
          <Card className="mb-8 inline-block w-full p-6 md:p-8">
            <div className="mb-5 flex md:mb-6">
              <BiSolidStar className="mr-1 size-6" style={{ color: "#FDAA32" }} />
              <BiSolidStar className="mr-1 size-6" style={{ color: "#FDAA32" }} />
              <BiSolidStar className="mr-1 size-6" style={{ color: "#FDAA32" }} />
              <BiSolidStar className="mr-1 size-6" style={{ color: "#FDAA32" }} />
              <BiSolidStar className="mr-1 size-6" style={{ color: "#FDAA32" }} />
            </div>
            <blockquote className="md:text-md">
              "I can't imagine shopping without Grabbl anymore!"
            </blockquote>
            <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-fit md:flex-row md:items-center">
              <img
                src="/girl_appstore.png"
                alt="Testimonial avatar"
                className="size-12 min-h-12 min-w-12 rounded-full object-cover overflow-visible"
              />
              <div>
                <p className="font-semibold">Sara Lee</p>
                <p>Regular Shopper</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
