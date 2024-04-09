import Link from "next/link"
import Image from "next/image"
import { FaFacebook, FaTwitter ,FaInstagram ,FaLinkedin  } from "react-icons/fa";
const Footer = () => {
  return (
    <div className=' bg-[#0F172A]' id='FOOTER'>

        <div className='flex flex-col md:flex-row md:items-start px-10 md:px-0 justify-around gap-10 md:gap-3     text-[#707581] py-14' >
            
            <div className="divF1 flex flex-col gap-1">
              <h1 className="text-white font-semibold mb-1">Resources</h1>
              <Link href="/">API & documentation</Link>
              <Link href="/">Blog</Link>
              <Link href="/">Use cases</Link>
              <Link href="/">Platform status</Link>
            </div>

            <div className="divF2 flex flex-col gap-1">
              <h1 className="text-white font-semibold mb-1">Company</h1>
              <Link href="/">Privacy policy</Link>
              <Link href="/">Terms and condition</Link>
              <Link href="/">About us</Link>
              <Link href="/">Contact us</Link>
            </div>
           
            <div className="divF3 flex flex-col gap-1">

              <div className="LOGO flex   gap-x-2">
                <Image src="/images/logo.png"  alt="logo" className="w-5 h-5 text-white" width={50} height={50}/>
                <h1 className="text-white font-semibold ">Colorfill.co</h1>
              </div>

              <h1 className="text-white font-semibold mb-3 mt-4 md:mt-8">Subscribe to our Newsletter</h1>

              <div className="flex md:items-center items-left justify-center ">
                <div >
                  <input type="text" placeholder="Enter your Email" className="bg-[#2B2E3C] px-3 py-3 text-xs" />
                </div>
                <button className="text-black bg-white rounded-r-lg px-6 py-3 text-xs font-semibold active:scale-95">Subscribe</button>
              </div>

            </div>
            
        </div>

        <div className='text-center  relative pb-5 '>

           <div className="absolute left-[25%]  lg:left-[37%] -top-2 bg-[#0F172A] px-5 flex flex-col items-center justify-center gap-5 text-[#707581]">

            <div className="flex items-center gap-5 "> 
              <p className="   text-xs ">© Copyright colorfill.co 2024</p>
              <Link href="/" className="hidden md:block"><FaFacebook /></Link>
              <Link href="/" className="hidden md:block"><FaTwitter  /></Link>
              <Link href="/" className="hidden md:block"><FaInstagram /></Link>
              <Link href="/" className="hidden md:block"><FaLinkedin /></Link>
            </div>
             <div className="flex  juatify-around gap-4 md:hidden ">
                <Link href="/"><FaFacebook /></Link>
                <Link href="/"><FaTwitter /></Link>
                <Link href="/"><FaInstagram /></Link>
                <Link href="/"><FaLinkedin /></Link>
             </div>

           </div>

           <div className="  w-full bg-[#707581] h-[0.5px] mb-10"></div>

        </div>

   </div>
  )
}

export default Footer