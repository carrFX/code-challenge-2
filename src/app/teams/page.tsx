import React, { useEffect, useState } from 'react'
import { AnimatedPinDemo } from "@/components/AnimatedPinDemo";
import teams from "@/data/db.json"

const page = () => {
  return (
    <section className="w-full flex justify-center items-center flex-col">
      <div className="min-h-[100vh]">
        <div className="text-center pt-8">
        <h1 className="text-3xl text-white font-bold text-center mb-12 tracking-widest uppercase">Leaders</h1>
        </div>
       <div className="w-full flex lg:flex-row flex-col items-center justify-center pb-10">
            <AnimatedPinDemo name="George Sutikno" age={49} gender="male" national="Germany" picture={teams.founder} />
            <AnimatedPinDemo name="John Bovi" age={34} gender="male" national="Portugal" picture={teams.maintenance} />
            <AnimatedPinDemo name="Tierry Henry" age={25} gender="male" national="Spanish" picture={teams.repair} />
          </div>
      </div>
      <div className="min-h-[100vh]">
      <div className="text-center pt-8">
        <h1 className="text-3xl text-white font-bold text-center mb-12 tracking-widest uppercase">Mechanics Engineering</h1>
      </div>
      <div className="w-full flex lg:flex-row flex-col items-center justify-center pb-10">
          <AnimatedPinDemo name="Ligma" age={49} gender="male" national="Germany" picture={teams.mechanic1} />
          <AnimatedPinDemo name="Brotha" age={34} gender="male" national="Portugal" picture={teams.mechanic2} />
          <AnimatedPinDemo name="Picollo" age={25} gender="male" national="Spanish" picture={teams.mechanic3} />
      </div>
      </div>
      <div className="min-h-[100vh]">
        <div className="text-center pt-8">
        <h1 className="text-3xl text-white font-bold text-center mb-12 tracking-widest uppercase">Production Teams</h1>
        </div>
        <div className="w-full flex lg:flex-row flex-col items-center justify-center pb-10">
          <AnimatedPinDemo name="Aurelie" age={49} gender="male" national="Germany" picture={teams.production1} />
          <AnimatedPinDemo name="Emily Davis" age={34} gender="male" national="Portugal" picture={teams.production2} />
          <AnimatedPinDemo name="Dora" age={25} gender="male" national="Spanish" picture={teams.production3} />
        </div>
      </div>
</section>
  )
}

export default page