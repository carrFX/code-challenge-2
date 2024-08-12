"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import img from "@/data/db.json"
import Image from "next/image";

interface IProps {
  name: string;
  age: number;
  gender: string;
  national: string;
  picture: string;
}

export function AnimatedPinDemo({name,age,gender,national,picture} : IProps) {
  return (
    // maaf pak.. agak belom paham yang props ditypescript.. ini baru ngerjain semalem jadi agak gugup
    <PinContainer title="send message" href="https://x.com/elonmusk">
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              {name} ({gender})
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <p>{age} Years Old</p>
              <p className="uppercase">{national}</p>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-center">
              <Image src={picture} alt="founder" width={300} height={300} />
            </div>
          </div>
        </PinContainer>
  );
}
