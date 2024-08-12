import React from "react";
import { AnimatedPinDemo } from "../AnimatedPinDemo";
import Link from "next/link";
import { PinContainer } from "../ui/3d-pin";
import img from "@/data/db.json";
import Image from "next/image";

const TeamAbout = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center">
        <div className="lg:w-1/2 my-2 text-center">
          <h1 className="text-2xl font-semibold text-white mb-3">Our Teams</h1>
          <p className="text-[#cbcbcb] mb-11">
            Our team at Mansory is comprised of highly skilled and
            dedicated professionals who are passionate about their work. Each
            member of our team brings a unique set of skills and experiences to
            the table, ensuring that every vehicle that enters our workshop
            receives the best possible care.
            <br />
            <Link href={"/teams"}>
              <span className="text-[#b48e30]">Read All Teams..</span>
            </Link>
          </p>
        </div>
      </div>
      {/* leaders spoiler image */}
      <div className="w-full flex lg:flex-row flex-col items-center justify-center pb-10">
        <PinContainer title="CEO and Founder" href="https://x.com/elonmusk">
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              George Sutikno
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                George is the driving force behind Mansory. With over 15 years
                of experience in the automotive industry, he has built a
                reputation for excellence and integrity
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-center">
              <Image src={img.founder} alt="founder" width={300} height={300} />
            </div>
          </div>
        </PinContainer>
        <PinContainer title="Head of Maintenance" href="https://x.com/elonmusk">
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              John Bovi
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                Jane oversees all maintenance operations at Mansory. Her
                expertise in mechanical engineering ensures that every vehicle
                is serviced to the highest standards.
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-center">
              <Image
                src={img.maintenance}
                alt="head of maintenance"
                width={300}
                height={300}
              />
            </div>
          </div>
        </PinContainer>
        <PinContainer
          title="Head of Custom Modifications"
          href="https://x.com/elonmusk"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Tierry Henry
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                Michael leads our custom modification team. With a keen eye for
                detail and a passion for innovation, he brings unique and
                exciting modifications to our customers
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-center">
              <Image
                src={img.repair}
                alt="head of modification"
                width={300}
                height={300}
              />
            </div>
          </div>
        </PinContainer>
      </div>
    </section>
  );
};

export default TeamAbout;
