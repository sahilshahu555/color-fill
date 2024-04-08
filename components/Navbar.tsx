"use client"
import Link from "next/link"
import Image from "next/image"
import {useState} from "react"
const Navbar = () => {
    const[menu,setMenu] = useState(false)
  return (

        <nav className="NAVBAR bg-gradient-to-r from-white  via-[#E4F4F7] via-60% to-white text-black  flex items-center justify-around py-4 sticky top-0 gap-24">
            

            <div className="LOGO hidden md:flex  items-center justify-center gap-0">
                <Image src="/icons/Logo.svg"  alt="logo" className="w-10 h-10" width={50} height={50}/>
            </div>

            <div className="LAPTOP-VIEW hidden md:flex justify-center  items-center   ">
               
                <div className="flex gap-10 ">
                    <Link className="link" href="/">What</Link>
                    <Link className="link" href="/">Pricing</Link> 
                    <Link className="link" href="/">How</Link>
                    <Link className="link" href="/">Why</Link>
                    <Link className="link" href="/">Contact</Link> 
                </div>

            </div>

             <div className="Profile hidden md:flex justify-center gap-1 items-center">

                <Link  href="/">
                    <button className= " link1 bg-white text-black text-sm font-semibold px-6 py-2 rounded-2xl active:scale-95 text-left hover:bg-[#313852] hover:text-white">Login</button>
                </Link>

                <Link href="/">
                    <button className= " link1 bg-black text-white text-sm font-semibold px-6 py-2 rounded-2xl active:scale-95 hover:bg-[#313852]">Signup</button>
                </Link>
            </div>

            <div className="MOBILE-VIEW md:hidden  w-full  ">
                <div className="flex  justify-around items-center p-2">
                <Image src="/icons/Logo.svg"  alt="logo" className="w-10" width={50} height={50}/>
                    <button className=" w-6" onClick={()=>{setMenu(!menu)}}>
                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                        </svg>
                    </button>
                </div>

                <div className={` ${menu?"grid grid-cols-1 gap-3  pl-20 p-3 font-semibold ":"hidden"} ease-in duration-1000 `}>
                    <Link className="link" href="/">What</Link>
                    <Link className="link" href="/">Pricing</Link> 
                    <Link className="link" href="/">How</Link>
                    <Link className="link" href="/">Why</Link>
                    <Link className="link" href="/">Contact</Link>

                    <div className=" flex gap-10">
                        <Link  href="/">
                          <button className= " link1 bg-white text-black text-sm font-semibold px-6 py-2 rounded-2xl active:scale-95 text-left">Login</button>
                        </Link>

                        <Link href="/">
                          <button className= " link1 bg-black text-white text-sm font-semibold px-6 py-2 rounded-2xl active:scale-95">Signup</button>
                        </Link>
                    </div>
                    
                </div>

            </div>
        </nav>

    
  )
}

export default Navbar