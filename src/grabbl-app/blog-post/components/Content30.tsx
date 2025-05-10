"use client";

import {

} from "@relume_io/relume-ui";
import { Fragment } from "react";
import {
  BiLinkAlt,
  BiLogoFacebookCircle,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { IntroductionParagraph } from "./Intro";
import { BlogImage } from "./BlogImage";
import { BoldBody } from "./BoldBody";
import { Body2Paragraph } from "./Body2Paragraph.tsx";
import { Quote } from "./Quote";
import { Conclusion } from "./Conclusion";

export function Content30() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-lg">
          <div className="mb-14 flex flex-col gap-y-8 sm:flex-row sm:items-center sm:justify-between md:mb-16 md:gap-y-0">

            <div className="flex items-start gap-2">
              <a
                href="#"
                className="size-8 rounded-[1.25rem] bg-background-secondary p-1"
              >
                <BiLinkAlt className="size-6" />
              </a>
              <a
                href="#"
                className="size-8 rounded-[1.25rem] bg-background-secondary p-1"
              >
                <BiLogoLinkedinSquare className="size-6" />
              </a>
              <a
                href="#"
                className="size-8 rounded-[1.25rem] bg-background-secondary p-1"
              >
                <FaXTwitter className="size-6 p-0.5" />
              </a>
              <a
                href="#"
                className="size-8 rounded-[1.25rem] bg-background-secondary p-1"
              >
                <BiLogoFacebookCircle className="size-6" />
              </a>
            </div>
          </div>
          <div className="md:prose-md prose lg:prose-lg mb-12 md:mb-16 lg:mb-20">
            <Fragment>
              <h3>Introduction</h3>
              <IntroductionParagraph />
              <figure>
                <BlogImage />
              </figure>
              <BoldBody />
              <Body2Paragraph />
              <Quote />
              <Conclusion />
              
            </Fragment>
          </div>
          <div>
            <div className="mb-8 text-center md:mb-10 lg:mb-12">
              <p className="font-semibold md:text-md">Share this post</p>
              <div className="mt-3 mb-8 flex items-start justify-center gap-2 sm:mb-0 md:mt-4">
                <a
                  href="#"
                  className="size-8 rounded-[1.25rem] bg-background-secondary p-1"
                >
                  <BiLinkAlt className="size-6" />
                </a>
                <a
                  href="#"
                  className="size-8 rounded-[1.25rem] bg-background-secondary p-1"
                >
                  <BiLogoLinkedinSquare className="size-6" />
                </a>
                <a
                  href="#"
                  className="size-8 rounded-[1.25rem] bg-background-secondary p-1"
                >
                  <FaXTwitter className="size-6 p-0.5" />
                </a>
                <a
                  href="#"
                  className="size-8 rounded-[1.25rem] bg-background-secondary p-1"
                >
                  <BiLogoFacebookCircle className="size-6" />
                </a>
              </div>
            </div>
            <div>
              <ul className="flex flex-wrap justify-center gap-2">
                <li className="flex">
                  <a
                    href="#"
                    className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                  >
                    Grabbl App
                  </a>
                </li>
                <li className="flex">
                  <a
                    href="#"
                    className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                  >
                    Local Stores
                  </a>
                </li>
                <li className="flex">
                  <a
                    href="#"
                    className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                  >
                    Fast Delivery
                  </a>
                </li>
                <li className="flex">
                  <a
                    href="#"
                    className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                  >
                    Affordable Prices
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="my-8 h-px bg-border-primary md:my-10 lg:my-12" />
          <div className="flex flex-col items-center gap-4 text-center">
            <div>
              <img
                src="/john_Doe.jpg"
                alt="Logo"
                className="size-14 rounded-full rounded-image object-cover"
              />
            </div>
            <div className="grow">
              <p className="font-semibold md:text-md">John Doe</p>
              <p>Content Writer, Grabbl</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}