import Image from "next/image"
import logo from "../../public/logo.png"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"
import Link from "next/link"
import { FaXTwitter } from "react-icons/fa6"

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center border-t mt-5 border-t-[#b48e30] pb-4">
        <div className="flex items-center justify-center">
            <Image src={logo} alt="logo" width={250} height={250}/>
        </div>
        <div className="flex justify-center items-center gap-5 mt-2">
            <Link href={"https://www.facebook.com/"}><FaFacebook className="text-[#cbcbcbab] hover:text-white duration-[.4s] lg:w-8 lg:h-8 w-6 h-6"/></Link>
            <Link href={"https://www.instagram.com/"}><FaInstagram className="text-[#cbcbcbab] hover:text-white duration-[.4s] lg:w-8 lg:h-8 w-6 h-6"/></Link>
            <Link href={"https://www.youtube.com/"}><FaYoutube className="text-[#cbcbcbab] hover:text-white duration-[.4s] lg:w-8 lg:h-8 w-6 h-6"/></Link>
            <Link href={"https://www.twitter.com/"}><FaXTwitter className="text-[#cbcbcbab] hover:text-white duration-[.4s] lg:w-8 lg:h-8 w-6 h-6"/></Link>
        </div>
        <div className="flex gap-6 border-t-[#b48e30] border-t mt-3 py-2">
            <Link href={'/services'}><h2 className="text-[#cbcbcbab] hover:text-white border-transparent pb-[1px] border-b-[1.5px] hover:border-b-[#b48e30] duration-[.4s]">maintenance</h2></Link>
            <Link href={'/products'}><h2 className="text-[#cbcbcbab] hover:text-white border-transparent pb-[1px] border-b-[1.5px] hover:border-b-[#b48e30] duration-[.4s]">spareparts</h2></Link>
            <Link href={'/teams'}><h2 className="text-[#cbcbcbab] hover:text-white border-transparent pb-[1px] border-b-[1.5px] hover:border-b-[#b48e30] duration-[.4s]">teams</h2></Link>
            <Link href={'/contact'}><h2 className="text-[#cbcbcbab] hover:text-white border-transparent pb-[1px] border-b-[1.5px] hover:border-b-[#b48e30] duration-[.4s]">contact</h2></Link>
        </div>
        <div className="flex lg:flex-row flex-col items-center justify-center px-4 pt-3 w-full">
            <h2 className="text-white ">© 2024. All rights reserved.</h2>
            <h2 className="text-white ">Terms of Use | Privacy Policy</h2>
        </div>
        <div>
            <h2 className="text-white ">Designed By <span className="text-[#b48e30] font-medium">Amir.S</span></h2>
        </div>
    </footer>
  )
}

export default Footer