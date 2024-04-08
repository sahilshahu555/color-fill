import Link from "next/link"

type Props = {}

export const Hero = (props: Props) => {
  return (

    <div className="HERO flex justify-between items-start  py-20
    bg-gradient-to-r from-white  via-[#E4F4F7] via-60% to-white ">

        <div className=" w-1/2 flex flex-col   gap-6 mt-20">

            <h1 className="text-[40px] font-bold w-[60%] tracking-wide leading-[45px]">Change color of any image automatically</h1>

            <p className="pr-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <Link href="/">
              <button className= " bg-black text-white text-sm font-semibold px-8 py-3 rounded-lg active:scale-95 hover:bg-[#313852]">Get Started
              </button>
            </Link>
        </div> 

        <div className="w-1/2 flex flex-col justify-center items-center gap-10">

          <div className="bg-[#f9f8f8] w-[90%] h-[22rem] rounded-xl flex flex-col  gap-5 items-center justify-center">
              <button className= " bg-[#6B7CFF] text-white text-sm font-semibold px-8 py-3 rounded-lg active:scale-95 hover:bg-[#313852] w-40 m-auto">Get Started
              </button>
              {/* <p className="text-center font-bold">or drop a file / paste URL</p> */}
          </div>
          <div className="h-36"></div>

        </div> 

    </div>
  )
}