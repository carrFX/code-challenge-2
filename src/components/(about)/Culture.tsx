import React from 'react'
import img from '@/data/db.json'
import Image from 'next/image'

const Culture = () => {
  return (
    <section>
      <div className="px-7 py-12 my-11 rounded-lg flex lg:flex-row-reverse flex-col-reverse items-center justify-center">
        <div className="lg:w-1/2 my-2 lg:text-left text-center lg:border-l lg:border-l-[#b48e30] lg:pl-4 lg:ml-3">
          <h1 className="text-2xl font-semibold text-white mb-3">Culture</h1>
          <p className="text-[#cbcbcb] mb-3">At Bengkel Mobil Drift, we believe that our culture is what sets us apart. We are committed to fostering a work environment that is both challenging and rewarding for our team members. Our core values include:</p>
          <ul>
            <li className='text-center lg:text-start'><strong>Excellence &gt;</strong><p>We strive for excellence in every aspect of our work, from the quality of our services to the satisfaction of our customers.</p></li>
            <li className='text-center lg:text-start'><strong>Integrity &gt;</strong><p>We operate with integrity, ensuring that every interaction with our customers is transparent and honest.</p></li>
            <li className='text-center lg:text-start'><strong>Innovation &gt;</strong><p>We continuously seek new ways to improve our services and stay ahead of industry trends.</p></li>
            <li className='text-center lg:text-start'><strong>Customer Satisfaction &gt;</strong><p>Our customers are at the heart of everything we do. We aim to exceed their expectations with every service we provide.</p></li>
          </ul>
        </div>
        <div className="rounded-full overflow-hidden"><Image src={img.culture} alt="maintenance" width={500} height={500} /></div>
      </div>
    </section>
  )
}

export default Culture