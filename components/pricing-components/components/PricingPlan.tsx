import React from 'react'

type Props = {}

const PricingPlan = (props: Props) => {
  return (
    <section className="flex flex-col gap-5 md:gap-5 justify-center items-center py-10">

        <h1 className=" font-bold text-4xl md:text-4xl text-center w-[90%] md:w-[40%] lg:w-[30%] leading-[45px] mt-10 md:mt-0 tracking-wide">Pricing plans that suit you</h1>
        <p className="text-center px-10 md:px-0 md:w-[40%] lg:w-1/4 text-xs md:text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>

        <div className="bg-[#E0E4FC] flex flex-center justify-around p-2 mt-2 rounded-xl gap-2">

             <button className="text-white bg-black px-8 py-2 font-semibold rounded-lg hover:bg-[#313852] hover:text-white">Monthly</button>
             <button className=" px-8 py-2 font-semibold rounded-lg hover:bg-[#313852] hover:text-white">Yearly</button>

        </div>

    </section>
  )
}

export default PricingPlan