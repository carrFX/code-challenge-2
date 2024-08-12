"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsShop } from "react-icons/bs";
import { FiAlignLeft } from "react-icons/fi";
import { RiCloseLargeFill } from "react-icons/ri";
import logo from '../../public/logo.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [open, setOpen] = useState(false);

  const scrollNav = () => {
    if (window.scrollY >= 20) {
      setNav(true);
    } else {
      setNav(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',scrollNav)
  },[])
  return (
    <>
      <nav
        className={`${nav ? 'bg-[#00000036] top-2 mx-auto mt-2 w-3/4 rounded-full border-[#b48e30] border' : 'border-b-[#b48e30] border-b'} flex justify-between backdrop-blur-sm bg-[#0000009a] py-3 sticky top-0 text-[#cbcbcb] items-center px-6 z-[10000]`}
      >
        <div className="lg:hidden flex items-center">
          <button onClick={() => setOpen(!open)}>
            {!open ? <FiAlignLeft width={50} height={50}/> : <RiCloseLargeFill width={50} height={50}/>}
          </button>
        </div>
        <div className="">
          <Link
            href={"/"}
            className="font-bold cursor-pointer text-xl text-white "
          >
            <Image src={logo} alt="logo" width={130} height={130}/>
          </Link>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex gap-7 my-auto px-1">
            <li
              className={`border-[1.5px] border-transparent hover:border-b-[#b48e30] hover:text-white duration-[.4s] uppercase tracking-widest text-sm`}
            >
              <Link href={"/"}>Home</Link>
            </li>
            <li
              className={`border-[1.5px] border-transparent hover:border-b-[#b48e30] hover:text-white duration-[.4s] uppercase tracking-widest text-sm`}
            >
              <Link href={"/about"}>About</Link>
            </li>
            <li
              className={`border-[1.5px] border-transparent hover:border-b-[#b48e30] hover:text-white duration-[.4s] uppercase tracking-widest text-sm`}
            >
              <Link href={"/services"}>Services</Link>
            </li>
            <li
              className={`border-[1.5px] border-transparent hover:border-b-[#b48e30] hover:text-white duration-[.4s] uppercase tracking-widest text-sm`}
            >
              <Link href={"/teams"}>Teams</Link>
            </li>
            <li
              className={`border-[1.5px] border-transparent hover:border-b-[#b48e30] hover:text-white duration-[.4s] uppercase tracking-widest text-sm`}
            >
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className=" h-9 my-auto p-1 flex justify-center items-center">
          <Link href={"/products"} className={`hover:text-[#b48e30] duration-[.4s] flex justify-center items-center`}>
            <BsShop className="w-[20px] h-[20px] lg:w-[26px] lg:h-[26px]"/>
          </Link>
        </div>
      </nav>
      {open && (
        <div className={`lg:hidden text-[#cbcbcb] fixed ${nav ? 'w-1/4 mx-6 bg-[#000000]' : 'w-2/4 mx-5 bg-[#d5d5d536] backdrop-blur-sm'} my-1 rounded-xl text-center overflow-hidden shadow-md shadow-black z-[1000]`}>
          <ul className="flex flex-col">
            <li className={`border border-transparent hover:border-b-[#b48e30] hover:text-white hover:bg-[#ffffff38] py-2 uppercase tracking-widest text-sm`}>
              <Link href={"/"}>Home</Link>
            </li>
            <li className={`border border-transparent hover:border-b-[#b48e30] hover:text-white hover:bg-[#ffffff38] py-2 uppercase tracking-widest text-sm`}>
              <Link href={"/about"}>About</Link>
            </li>
            <li className={`border border-transparent hover:border-b-[#b48e30] hover:text-white hover:bg-[#ffffff38] py-2 uppercase tracking-widest text-sm`}>
              <Link href={"/services"}>Services</Link>
            </li>
            <li className={`border border-transparent hover:border-b-[#b48e30] hover:text-white hover:bg-[#ffffff38] py-2 uppercase tracking-widest text-sm`}>
              <Link href={"/teams"}>Teams</Link>
            </li>
            <li className={`border border-transparent hover:border-b-[#b48e30] hover:text-white hover:bg-[#ffffff38] py-2 uppercase tracking-widest text-sm`}>
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
