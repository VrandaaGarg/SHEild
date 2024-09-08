import React from "react";
import { Link } from "react-scroll";

function Footer() {
  return (
    <div className="bg-gray-800 py-20 px-9">
      <div className="flex flex-col gap-3">
        <div className="px-7 text-white text-xl md:text-3xl font-semibold">
          SHEild
        </div>
        <div className="h-[1.5px] w-full rounded-lg bg-white"></div>
      </div>
      <div className="flex gap-28">
        <div className=" text-white text-base md:text-xl  py-7 px-7">
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                smooth={true}
                duration={500}
                to="SHEild"
                className=" cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                smooth={true}
                duration={500}
                to="About"
                className=" cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                smooth={true}
                duration={500}
                to="Features"
                className=" cursor-pointer"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                smooth={true}
                duration={500}
                to="FAQs"
                className=" cursor-pointer"
              >
                Faqs
              </Link>
            </li>
            <li>
              <Link
                smooth={true}
                duration={500}
                to="Team"
                className=" cursor-pointer"
              >
                Team
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="text-white text-base md:text-xl py-7 px-7 flex flex-col gap-2">
            <li>SUPPORT</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="h-[1.5px] w-full rounded-lg bg-white"></div>
        <div className="text-white text-sm md:text-lg text-center">
          © 2024 SHEild™. All Rights Reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
