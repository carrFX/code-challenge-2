import React from 'react'
import Products from '../products/page'
import img from '@/data/db.json'
import Image from 'next/image'
import Link from 'next/link'

const Services = () => {
  return (
    <section className="">
        <div className="px-7 pb-12 my-11 rounded-lg flex lg:flex-row flex-col-reverse items-center justify-center">
        <div className="lg:w-1/2 my-2 lg:text-right text-center lg:border-r lg:border-r-[#b48e30] lg:pr-4 lg:mr-3">
          <h1 className="text-2xl font-semibold text-white mb-3">Vehicle Maintenance at Mansory</h1>
          <p className="text-[#cbcbcb] mb-11">Mansory car repair shop was founded in 2010 by a group of passionate automotive enthusiasts who shared a common vision: to provide top-notch maintenance, repair, and service for vehicles while fostering a culture of excellence and customer satisfaction. Our journey began with a small workshop in the heart of the city, where we started by offering basic services such as oil changes and tire rotations. Over the years, we have grown significantly, expanding our services to include advanced engine repairs, custom modifications, and comprehensive vehicle detailing.</p>
          <Link
              href="/contact"
              className="px-4 py-2 backdrop-blur-sm border bg-[#3125083a] hover:border-[#7e5e0b] duration-200 hover:text-[#7e5e0b] text-white mx-auto text-center rounded-full relative"
            >
              <span>Get Started</span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-[#e9bd4f] to-transparent" />
            </Link>
        </div>
        <div className="rounded-full overflow-hidden"><Image src={img.services} alt="history" width={500} height={500}/></div>
      </div>
        <Products/>
    </section>
  )
}

export default Services