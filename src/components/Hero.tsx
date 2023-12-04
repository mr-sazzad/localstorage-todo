import Image from "next/image";
import Link from "next/link";
import React from "react";

import { TbArrowUpRight } from "react-icons/tb";

const Hero = () => {
  return (
    <div className="max-w-6xl mx-auto md:mt-0 mt-5">
      <div className="flex flex-col gap-5 md:flex-row justify-center md:items-center px-[20px]">
        <div className="flex-1 flex sm:justify-start justify-center items-center">
          <div className="flex flex-col gap-4">
            <h2 className="md:text-5xl text-4xl md:leading-[38px] leading-[16px] font-semibold">
              Simple Task
            </h2>
            <h2 className="md:text-5xl text-4xl font-semibold">Manager Site</h2>
            <p>
              Explore captivating posts and mesmerizing photos in our two
              vibrant sections. Express yourself with a simple click—like and
              save to curate your personalized journey.
            </p>

            <div>
              <Link
                href="/dashboard"
                className="px-4 py-1.5 bg-[#19C7AE] border border-green-400 rounded-full text-white inline-flex gap-1 items-center group hover:bg-[#13ac95] transition-all duration-150"
              >
                <p>Go To Dashboard</p>
                <TbArrowUpRight className="group-hover:rotate-45 transition-transform duration-300 ease-in-out" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full h-full flex justify-center items-center">
          <div className="sm:h-[400px] sm:w-[400px] h-[300px] w-[300px] relative">
            <Image src="/assets/task.jpg" alt="task-image" fill className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
