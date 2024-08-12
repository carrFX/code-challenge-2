import historyImg from "@/data/db.json"
import Image from "next/image"
const History = () => {
  return (
    <div>
        <div className="px-7 py-12 my-11 rounded-lg flex lg:flex-row flex-col-reverse items-center justify-center">
        <div className="lg:w-1/2 my-2 lg:text-right text-center lg:border-r lg:border-r-[#b48e30] lg:pr-4 lg:mr-3">
          <h1 className="text-2xl font-semibold text-white mb-3">History of Mansory</h1>
          <p className="text-[#cbcbcb] mb-11">Mansory car repair shop was founded in 2010 by a group of passionate automotive enthusiasts who shared a common vision: to provide top-notch maintenance, repair, and service for vehicles while fostering a culture of excellence and customer satisfaction. Our journey began with a small workshop in the heart of the city, where we started by offering basic services such as oil changes and tire rotations. Over the years, we have grown significantly, expanding our services to include advanced engine repairs, custom modifications, and comprehensive vehicle detailing.</p>
        </div>
        <div className="rounded-full overflow-hidden"><Image src={historyImg.historyImg} alt="history" width={500} height={500}/></div>
      </div>
    </div>
  )
}

export default History