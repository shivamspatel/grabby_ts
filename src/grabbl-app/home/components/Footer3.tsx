"use client";

import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

export function Footer3() {
  return (
    <footer id="relume" className="px-[5%] py-12 md:py-18 lg:py-20 bg-black text-white">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-[4vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4 lg:pb-20">
          <div>
            <div className="mb-6 md:mb-8">
              <a href="#">
                <img
                  src="/grabbl_logo.svg"
                  alt="Logo image"
                  className="inline-block"
                />
              </a>
            </div>
            <div className="mb-6 md:mb-8">
              <p className="mb-1 text-sm font-semibold">Address:</p>
              <p className="mb-5 text-sm md:mb-6">
                1370 Hazelwood Dr, Smryna TN 37167
              </p>
              <p className="mb-1 text-sm font-semibold">Contact:</p>
              <a
                href="tel:1920 629 2942"
                className="block text-sm underline decoration-white underline-offset-1"
              >
                (920) 629-2942
              </a>
              <a
                href="mailto:info@relume.io"
                className="block text-sm underline decoration-white underline-offset-1"
              >
                support@grabbl.io
              </a>
            </div>
            <div className="grid grid-flow-col grid-cols-[max-content] items-start justify-start gap-x-3">
              <a href="#">
                <BiLogoFacebookCircle className="size-6 text-white" />
              </a>
              <a href="#">
                <BiLogoInstagram className="size-6 text-white" />
              </a>
              <a href="#">
                <FaXTwitter className="size-6 text-white p-0.5" />
              </a>
              <a href="#">
                <BiLogoLinkedinSquare className="size-6 text-white" />
              </a>
              <a href="#">
                <BiLogoYoutube className="size-6 text-white" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10 md:grid-cols-2 md:gap-x-8 md:gap-y-4">
            <ul>
              <li className="py-2 text-sm font-semibold">
                <a href="#">About Us</a>
              </li>

              <li className="py-2 text-sm font-semibold">
                <a href="#">Blog Posts</a>
              </li>
              <li className="py-2 text-sm font-semibold">
                <a href="#">Careers</a>
              </li>
              <li className="py-2 text-sm font-semibold">
                <a href="#">Contact Us</a>
              </li>
            </ul>
            <ul>
              <li className="py-2 text-sm font-semibold">
                <a href="#">FAQs</a>
              </li>

              <li className="py-2 text-sm font-semibold">
                <a href="#">User Reviews</a>
              </li>
              <li className="py-2 text-sm font-semibold">
                <a href="#">Merchant Info</a>
              </li>
              <li className="py-2 text-sm font-semibold">
                <a href="#">App Download</a>
              </li>
            </ul>
            <div className="flex justify-center gap-4 md:col-span-2">
              <a href="#">
                <img
                  src="/googleplay.png"
                  alt="Download on Google Play"
                  className="max-w-[150px] h-auto"
                />
              </a>
              <a href="#">
                <img
                  src="/apple_download.png"
                  alt="Download on the App Store"
                  className="max-w-[150px] h-auto"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-white" />
        <div className="flex flex-col-reverse items-start justify-between pt-6 pb-4 text-sm md:flex-row md:items-center md:pt-8 md:pb-0">
          <p className="mt-8 md:mt-0">© 2025 Grabbl</p>
          <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <li className="underline">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="underline">
              <a href="#">Terms of Service</a>
            </li>
            <li className="underline">
              <a href="#">Cookies Settings</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}