"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@relume_io/relume-ui";
import { Fragment } from "react";
import {
  BiLinkAlt,
  BiLogoFacebookCircle,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

export function Content30() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-lg">
          <div className="mb-14 flex flex-col gap-y-8 sm:flex-row sm:items-center sm:justify-between md:mb-16 md:gap-y-0">
            <Breadcrumb className="flex items-center">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Blog</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Category</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
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
              <p>
                Welcome to our blog, where we explore the exciting world of Grabbl! Our app is designed to simplify your shopping experience by allowing you to purchase alcohol and snacks from local stores with just a few taps. With Grabbl, you can enjoy the convenience of fast delivery, often at lower prices than competitors like DoorDash and UberEats.
              </p>
              <p>
                Our user-friendly interface ensures that you can navigate through the app effortlessly. Whether you're planning a gathering or just need a late-night snack, Grabbl is here to serve you. We pride ourselves on providing a seamless experience, making it easier than ever to satisfy your cravings.
              </p>
              <figure>
                <img
                  src="/backgroundblog.jpg"
                  alt="Relume placeholder image"
                />
                <figcaption>Image caption goes here</figcaption>
              </figure>
              <h6>
                As you explore our app, you'll find a wide selection of products from your favorite local liquor stores and convenience shops. Our platform allows merchants to easily manage their inventory and orders, ensuring that you have access to the freshest items available.

              </h6>
              <p>
                We understand that time is of the essence, which is why our app is designed to minimize waiting. With Grabbl, you can choose to have your order delivered directly to your door or opt for in-store pickup at your convenience.
              </p>
              <blockquote>
                "Grabbl is the easiest way to get what you want, when you want it!"
              </blockquote>
              <p>
                Our commitment to affordability means you can enjoy your favorite products without breaking the bank. We work closely with local merchants to ensure competitive pricing and a diverse selection of items.
              </p>
              <h4>Conclusion</h4>
              <p>
                  In conclusion, Grabbl is revolutionizing the way you shop for alcohol and snacks. With our easy-to-use app, you can enjoy fast, affordable delivery from local stores. Don't miss out on the convenience and savings that Grabbl offers.
              </p>
              <p>
                Join the Grabbl community today and experience the difference for yourself! Download the app now and start enjoying your favorite products at unbeatable prices.
              </p>
              <p>
                Thank you for reading our blog! We hope you found this information helpful and informative. If you have any questions or feedback, please feel free to reach out to us.
              </p>
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