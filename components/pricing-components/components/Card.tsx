"use client"

import Image from 'next/image'
import Link from "next/link";

type PlanType = {
  id:string,
  icon:string,
  title:string,
  planType:string,
  benefits:{icon:string,item:string}[],
  desc:string,
  amount:string,
  period:string,  

}

type CardType={ 

  plan: PlanType; 
  key: string; 
}

const Card = ({plan}: CardType) => {
  const{icon,title,planType,benefits,desc,amount,period}=plan;
  return (
    <div className='flex flex-col items-start  h-[32rem] bg-white hover:bg-gradient-to-r from-[#D7E7F9] to-[#D5F4EC] rounded-2xl w-[90%]  lg:w-[24%] hover:ring-2 ring-blue-500'>

      <div className="div1 flex items-center gap-4 border-b border-[#D8D8D8] w-full pl-8 py-6">

         <Image src={icon} alt="plan-icon" width={50} height={50} className="w-8"/>
         <div>
             <h1 className='font-bold text-[22px] tracking-wide'>{title}</h1>
             <p className=' text-[11.5px] text-gray-500 -mt-1'>{planType}</p>
         </div>

      </div>

      <div className="div2 flex flex-col gap-5 py-5">
            {plan?.benefits?.map((benefit,index)=>(
               <div className="flex pl-8 gap-4" key={index}>
                  <Image src={benefit.icon} alt="Tick-icon" width={18} height={18}/>
                  <h6 className="font-bold text-xs">{benefit.item}</h6>
               </div>
            ))}
      </div>

      <p className="text-center px-10 text-[10px] my-3">{desc}</p>
      <h1 className="text-3xl font-bold text-center w-full mt-3">{amount}</h1>
      <p className="text-center w-full text-[9px] text-[#0f1728]">{period}</p>
      <div className="flex items-center justify-center w-full">
        <Link href="">
            <button className= " bg-black text-white text-xs font-semibold px-8 py-3.5 rounded-lg active:scale-95 hover:bg-[#313852] mt-5  m-auto " onClick={(e)=>e.preventDefault()}>Get Started</button>
        </Link>
      </div>

    </div>
  )
}

export default Card