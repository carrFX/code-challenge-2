import Image from "next/image";
import React from "react";
import products from "@/data/db.json";
import Link from "next/link";

const Card = () => {
  return (
    <div className="w-[300px] h-[500px] flex flex-col justify-center items-center border border-white">
      <Image src={products.products1} alt="image" width={300} height={300} />
      <h2 className="text-lg font-semibold text-white">
        Booster Gas - Genuine Part
      </h2>
      <div className="flex justify-between bg-red-700 w-full">
        <p>$ 10.00</p>
        <Link
          href="/contact"
          className="px-2 py-1 backdrop-blur-sm border bg-[#3125083a] hover:border-[#7e5e0b] duration-200 hover:text-[#7e5e0b] text-white mx-auto text-center rounded-full relative"
        >
          <span>Buy</span>
        </Link>
      </div>
    </div>
  );
};

export default Card;
