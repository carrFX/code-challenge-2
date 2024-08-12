"use client";
import Link from 'next/link'
import { SiCoronaengine } from 'react-icons/si'
import React from "react";

const Overview = () => {
  return (
    <section className="w-full lg:my-3 h-[90vh] flex flex-col justify-center items-center bg-transparent bg">
        <div className="mt-10 mx-auto lg:w-[90%] flex flex-col items-center">
          <div className="w-[150px] h-[150px] mb-6">
            <SiCoronaengine className="text-[#cbcbcba4] w-full h-full" />
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-[#ffffffc5] text-4xl text-center">
              OVERVIEW
            </h1>
            <div className="lg:px-32 px-2 mt-2 flex flex-col justify-center items-center">
              <p className="text-[#cbcbcb] first-letter:ml-4 text-center">
                Mansory was founded in 2010 by a group of passionate automotive enthusiasts who shared a common vision. This car repair shop is dedicated
                especially to drift and racing cars. As a drift and racing car
                repair shop, we have won international drift car modification
                competitions. All of this is thanks to the efforts of reliable
                and professional teammates.
              </p>
              <Link
                  href="/about"
                  className="px-4 mt-2 py-2 backdrop-blur-sm border bg-[#3125083a] hover:border-[#7e5e0b] duration-200 hover:text-[#7e5e0b] text-white mx-auto text-center rounded-full relative"
                >
                  <span>View More</span>
                  <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-[#e9bd4f] to-transparent" />
                </Link>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Overview