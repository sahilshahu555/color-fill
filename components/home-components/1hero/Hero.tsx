import Link from "next/link"
import Image from "next/image"

type Props = {}

export const Hero = (props: Props) => {
  return (

    <div className="HERO flex flex-col md:flex-row justify-between items-start  py-[2.5rem] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#d8ebef] to-white   gap-20 md:gap-0 px-5 md:px-20">

        <div className=" w-full md:w-1/2 flex flex-col gap-10  md:gap-6 mt-10 ">

            <h1 className=" text-3xl  md:text-[30px] lg:text-[40px] font-bold w-full md:w-[80%] lg:w-[60%] tracking-wide md:leading-[40px] lg:leading-[45px]">Change color of any image automatically</h1>

            <p className=" w-full text-sm md:text-[11px] lg:text-[15px] md:pr-6 lg:pr-16 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <Link href="/">
              <button className= " bg-black text-white text-sm font-semibold px-8 py-3 rounded-lg active:scale-95 hover:bg-[#313852]">Get Started
              </button>
            </Link>
        </div> 

        <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-5 ">

          <div className="bg-white w-[90%] h-[16rem] md:h-[18rem] lg:h-[20rem] rounded-xl flex flex-col justify-center items-center gap-5  ">
             <button className="bg-[#6B7CFF] text-white text-sm px-5 py-3 rounded-lg active:scale-95">Upload image</button>

             <p className="font-bold flex flex-col items-center"><span>or</span>drop a file/ paste URL</p>
          </div>

          <div className=" flex items-center justify-between my-2">

            <p className="w-1/4 text-xs md:text-xs lg:text-sm">{"or try one of these images"}</p>
            <Image src="/images/home-image1.png" alt="home-image1" width={100} height={100} className="w-14  lg:w-20 "/>
            <Image src="/images/home-image2.png" alt="home-image2" width={100} height={100} className=" w-14  lg:w-20 "/>
            <Image src="/images/home-image3.png" alt="home-image2" width={100} height={100} className="w-14  lg:w-20 "/>

          </div>

        </div> 

    </div>
  )
}