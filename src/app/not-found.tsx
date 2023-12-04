"use client";

import NotFoundText from "@/components/404";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="h-[100vh] w-full flex justify-center items-center bg-[#B5B5B5] px-[20px] lg:px-[50px]">
      <div className="max-w-5xl mx-auto sm:h-[70vh] h-[85vh] mt-5 rounded-2xl md:px-16 px-5 py-5 bg-white">
        <div className="h-full">
          <div className="flex flex-col md:flex-row justify-around items-center h-full gap-5">
            <div className="flex flex-col justify-center items-center gap-3 flex-1 h-full">
              <NotFoundText />
              <h1 className="text-5xl font-semibold text-gray-900">
                Lost in art
              </h1>
              <p className="text-gray-600 text-sm">
                Oops! It seems like you&lsquo;ve taken a wrong turn. The page
                you&lsquo;re looking for is nowhere to be found. Please check
                the URL and try again. If the issue persists, our apologies for
                the inconvenience, and feel free to contact our support team for
                assistance.
              </p>
              <div className="flex gap-3">
                <button
                  className="px-3 py-1 border border-gray-900 text-gray-900"
                  onClick={() => router.push("/")}
                >
                  Go Home
                </button>
                <button
                  className="px-3 py-1 bg-gray-900 border border-gray-900 text-white"
                  onClick={() => router.back()}
                >
                  Go to previous page
                </button>
              </div>
            </div>
            <div className="flex-1 h-full w-full flex justify-end">
              <div className="h-[100%] lg:w-[350px] md:w-[310px] w-[100%] relative">
                <Image
                  src="/assets/404.png"
                  alt="not-found-image"
                  fill
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
