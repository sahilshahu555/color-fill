
import Image from "next/image";

type Props = {}

export const HowItWorks = (props: Props) => {
  return (
    <section className="flex flex-col items-center justify-center text-center gap-10 mt-10 mb-20">

         <h1 className="text-3xl lg:text-4xl w-[75%] font-bold ">How it works</h1>
         <p className="text-[13px] lg:pr-20 w-[80%] md:w-[70%] lg:w-1/2 lg:ml-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.</p>

         <div className="md:h-[20rem] border w-[90%] m-auto rounded-2xl flex flex-col md:flex-row items-center justify-center gap-10 md:gap-0 py-5 md:py-0">

             <div className="md:w-1/2 flex flex-col gap-4 text-left ml-14 ">

               <h1 className="gradientText2 font-bold">1------------- 2 --------------3</h1>

                <h1 className="md:text-xl lg:text-3xl w-[75%] font-bold">New invoicing features to help you get</h1>
                <p className="text-[12px] md:pr-10 lg:pr-32 ">{"Over the past few months, we’ve added several new features to SaaS Invoicing to help any business get paid faster and streamline their collection workflows."}</p>

               <p className="font-semibold text-[#OF172A] text-sm">Luke Matthews l  November 8, 2021</p>

             </div>

             <div className=" md:w-1/2 ">
               <Image src="/images/office.png" alt="office" width={500} height={500} className="w-[90%] lg:w-[80%] m-auto h-[15rem] rounded-2xl"/>
             </div>

         </div>
         
    </section>
  )
}

export default HowItWorks