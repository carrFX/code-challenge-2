"use client";
import { motion } from "framer-motion";
import { ImagesSlider } from "../ui/images-slider";
import heroimg from "@/data/db.json";
import Link from "next/link";

const Hero = () => {
  return (
    <ImagesSlider className="h-[40rem]" images={heroimg.heroImage}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl bg-transparent md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          <span className="text-[#b48e30]">Adrenaline </span>at Every Turn
        </motion.p>
        <Link
          href="/services"
          className="px-4 py-2 backdrop-blur-sm border bg-[#3125083a] hover:border-[#7e5e0b] duration-200 hover:text-[#7e5e0b] text-white mx-auto text-center rounded-full relative mt-4"
        >
          <span>Achieve your dreams</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-[#e9bd4f] to-transparent" />
        </Link>
      </motion.div>
    </ImagesSlider>
  );
};

export default Hero;
