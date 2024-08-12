import maintenanceImg from "@/data/db.json";
import Image from "next/image";
import Link from "next/link";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import teams from "@/data/db.json";

const ServicesHome = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="w-[90%]">
        {/* services */}
        <div className="px-7 py-12 rounded-lg flex lg:flex-row flex-col-reverse items-center justify-center">
          <div className="lg:w-1/2 my-2 lg:text-right text-center lg:border-r lg:border-r-[#b48e30] lg:pr-4 lg:mr-3">
            <h1 className="text-2xl font-semibold text-white mb-3">Services</h1>
            <p className="text-[#cbcbcb] mb-11">
            Mansory car repair shop offers comprehensive and professional vehicle maintenance services. We understand that regular maintenance is crucial to keeping your vehicles performance optimal. Therefore, we provide a wide range of maintenance services, from basic tasks such as oil changes and tire replacements to advanced services like injector calibration and piggyback retuning. We also offer tune-up services, engine condition scans, and performance upgrades to ensure your vehicle runs smoothly and efficiently.
            </p>
            <Link
              href="/contact"
              className="px-4 py-2 backdrop-blur-sm border bg-[#3125083a] hover:border-[#7e5e0b] duration-200 hover:text-[#7e5e0b] text-white mx-auto text-center rounded-full relative"
            >
              <span>Get Services</span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-[#e9bd4f] to-transparent" />
            </Link>
          </div>
          <div className="rounded-full overflow-hidden">
            <Image
              src={maintenanceImg.maintenanceImg}
              alt="maintenance"
              width={500}
              height={500}
            />
          </div>
        </div>
        {/* product */}
        <div className="px-7 rounded-lg flex lg:flex-row-reverse flex-col-reverse items-center justify-center">
          <div className="lg:w-1/2 my-2 lg:text-left text-center lg:border-l lg:border-l-[#b48e30] lg:pl-4 lg:ml-3">
            <h1 className="text-2xl font-semibold text-white mb-3">Product</h1>
            <p className="text-[#cbcbcb] mb-11">
            On the next page,you will find comprehensive information about our services, including routine maintenance, engine repairs, custom modifications, and much more. We also feature testimonials from satisfied customers who have experienced our exceptional service. <br />
            Feel free to contact us if you have any questions or would like to schedule an appointment. We are here to help you keep your car running smoothly and looking its best<br/>
            Thank you for visiting our page. Let&apos;s start your journey to a perfect car with Mansory
            </p>
            <Link
              href="/products"
              className="px-4 py-2 backdrop-blur-sm border bg-[#3125083a] hover:border-[#7e5e0b] duration-200 hover:text-[#7e5e0b] text-white mx-auto text-center rounded-full relative"
            >
              <span>All product</span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-[#e9bd4f] to-transparent" />
            </Link>
          </div>
          <div className="rounded-full overflow-hidden">
            <Image
              src={maintenanceImg.products3}
              alt="maintenance"
              width={500}
              height={500}
            />
          </div>
        </div>
        {/* TeamsHome */}
        <div className="mb-24 mt-9">
          <h1 className="text-center text-2xl font-bold">Our Teams :</h1>
          <div className="my-1 flex flex-row items-center justify-center">
            <AnimatedTooltip items={teams.teams} />
            <Link href={"/teams"}>
              <h1 className="ml-5 w-[30px] h-[30px] border duration-200 hover:text-[#b48e30] hover:border-[#b48e30] hover:translate-x-1 rounded-full flex items-center justify-center">
                -&gt;
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHome;
