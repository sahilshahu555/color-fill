"use client"
import {useState} from "react"
import Image from "next/image";

type Props = {}

const Questions = (props: Props) => {

    const [open1, setOpen1]=useState(true)
    const [open2, setOpen2]=useState(false)
    const [open3, setOpen3]=useState(false)
    const [open4, setOpen4]=useState(false)


    const data=[
        {
          title:"How do I grow my business?",
          desc:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
          icon:"/icons/minus.svg"
        },
        {
            title:"Can I cancel my subscription?",
            desc:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            icon:"/icons/plus.svg"
        },
        {
            title:"How do I contact the support?",
            desc:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            icon:"/icons/plus.svg"
        },
        {
            title:"Is a credit card required?",
            desc:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            icon:"/icons/plus.svg"
        },
    ]

  return (
    <section className='flex flex-col md:flex-row items-start justify-around px-5 lg:px-20 m-auto bg-[#F0F2FE] w-[90%] rounded-2xl py-14 gap-10 md:gap-0'>

        <div className='md:w-[40%] lg:w-[35%]'>

            <h1 className="text-2xl font-bold pr-10 mb-2">Frequestly Asked Questions</h1>
            <p className="text-xs md:pr-5 lg:pr-0">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>

        </div>

        <div className=' md:w-[55%] flex flex-col gap-4 cursor-pointer'>

            

            <div className=" Div1 rounded-lg bg-white p-4 ">
                <div className="flex items-center justify-between px-4 md:px-10 gap-14 md:gap-10 ">
                    <h4 className="font-semibold text-sm md:text-md ">{data[0].title}</h4>
                    {open1?(
                      <Image src="/icons/minus.svg" width={50} height={50} alt="expander" className="w-3.5 h-3.5" onClick={()=>setOpen1(!open1)}/>
                    ):(
                      <Image src="/icons/plus.svg" width={50} height={50} alt="expander" className="w-3.5 h-3.5" onClick={()=>setOpen1(!open1)}/>
                    )}
                   
                </div>
            {open1 && <p className="px-4 md:px-0 md:pl-10 md:pr-6 mt-2 text-xs">{data[0].desc}</p>}
            </div>
            
            <div className=" Div2 rounded-lg bg-white p-4">
                <div className="flex items-center justify-between px-4 md:px-10 ">
                    <h4 className="font-semibold text-sm md:text-md ">{data[1].title}</h4>
                    {open2?(
                      <Image src="/icons/minus.svg" width={50} height={50} alt="expander" className="w-3.5 h-3.5" onClick={()=>setOpen2(!open2)}/>
                    ):(
                      <Image src="/icons/plus.svg" width={50} height={50} alt="expander" className="w-3.5 h-3.5" onClick={()=>setOpen2(!open2)}/>
                    )}
                   
                </div>
            {open2 && <p className="px-4 md:px-0 md:pl-10 md:pr-6 mt-2 text-xs">{data[1].desc}</p>}
  
            </div>

            <div className=" Div3 rounded-lg bg-white p-4 ">
                <div className="flex items-center justify-between px-4 md:px-10 ">
                    <h4 className="font-semibold text-sm md:text-md">{data[2].title}</h4>
                    {open3?(
                      <Image src="/icons/minus.svg" width={50} height={50} alt="expander" className="w-3.5 h-3.5" onClick={()=>setOpen3(!open3)}/>
                    ):(
                      <Image src="/icons/plus.svg" width={50} height={50} alt="expander" className="w-3.5 h-3.5" onClick={()=>setOpen3(!open3)}/>
                    )}
                   
                </div>
            {open3 && <p className="px-4 md:px-0 md:pl-10 md:pr-6 mt-2 text-xs">{data[2].desc}</p>}
                
            </div>

            <div className=" Div4 rounded-lg bg-white p-4">
                <div className="flex items-center justify-between px-4 md:px-10 ">
                    <h4 className="font-semibold text-sm md:text-md">{data[3].title}</h4>
                    {open4?(
                      <Image src="/icons/minus.svg" width={50} height={50} alt="expander" className="w-3.5 h-3.5" onClick={()=>setOpen4(!open4)}/>
                    ):(
                      <Image src="/icons/plus.svg" width={50} height={50} alt="expander" className="w-3.5 h-3.5" onClick={()=>setOpen4(!open4)}/>
                    )}
                   
                </div>
            {open4 && <p className="px-4 md:px-0 md:pl-10 md:pr-6 mt-2 text-xs">{data[3].desc}</p>}
                
            </div>

        </div>


    </section>
  )
}

export default Questions