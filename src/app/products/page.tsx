"use client"
 
import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "../../components/ui/direction-aware-hover";
import productImg from "@/data/db.json"
import Link from "next/link";
const Products = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div>
        <h1 className="text-3xl font-bold mb-4 text-white">Products</h1>
      </div>
    <div className="w-90% mx-auto relative grid grid-cols-1 lg:grid-cols-2 gap-5">
      <DirectionAwareHover imageUrl={productImg.products1}>
        <p className="font-bold text-xl">Booster GAS (Turbo)</p>
        <div className="flex flex-col gap-1">
        <p className="font-normal text-sm">$421</p>
        <Link href={'/contact'} className="text-center hover:text-[#b48e30] border hover:border-[#b48e30] duration-200 rounded-3xl px-2 py-1">Buy</Link>
        </div>
      </DirectionAwareHover>
      <DirectionAwareHover imageUrl={productImg.products2}>
        <p className="font-bold text-xl">HSR Wheels - R16FFX</p>
        <div className="flex flex-col gap-1">
        <p className="font-normal text-sm">$101</p>
        <Link href={'/contact'} className="text-center hover:text-[#b48e30] border hover:border-[#b48e30] duration-200 rounded-3xl px-2 py-1">Buy</Link>
        </div>
      </DirectionAwareHover>
      <DirectionAwareHover imageUrl={productImg.products3}>
        <p className="font-bold text-xl">Issota Marines - R16FFX</p>
        <div className="flex flex-col gap-1">
        <p className="font-normal text-sm">$129</p>
        <Link href={'/contact'} className="text-center hover:text-[#b48e30] border hover:border-[#b48e30] duration-200 rounded-3xl px-2 py-1">Buy</Link>
        </div>
      </DirectionAwareHover>
      <DirectionAwareHover imageUrl={productImg.products4}>
        <p className="font-bold text-xl">Sharp Trades - Filtered</p>
        <div className="flex flex-col gap-1">
        <p className="font-normal text-sm">$149</p>
        <Link href={'/contact'} className="text-center hover:text-[#b48e30] border hover:border-[#b48e30] duration-200 rounded-3xl px-2 py-1">Buy</Link>
        </div>
      </DirectionAwareHover>
    </div>
    </div>
  )
}

export default Products

// Sharp Traders - Genuine Suplies
// Booster gas fuel increase - E120XF06
