import Image from "next/image"

type Props = {}

const AllFeatures = (props: Props) => {
  return (
    <section className='bg-white px-5 md:px-20'>

        <div className="div1 flex items-center justify-around h-[24rem] ">

            <div className="w-1/2 flex flex-col gap-5 ">
                
                <h1 className="gradientText2 font-bold">Change colors</h1>

                <h1 className="text-4xl w-[70%] font-bold">Create a consistent brand identity</h1>
                <p className="text-[14px] pr-20">{"With Colorfill, maintaining consistency across all your brand assets becomes effortless. You can scale and adapt images to fit various platforms and mediums while ensuring that they stay true to your brand's visual identity."}</p>

            </div>

            <div className=" w-1/2 flex items-center justify-center">
                <Image src="/icons/service1.svg" alt="service1" width={500} height={500} className="w-[60%]"/>
            </div>

        </div>

        <div className="div2 flex flex-row-reverse items-center justify-around h-[24rem]">

            <div className="w-1/2 flex flex-col gap-5">
                
                <h1 className="gradientText2 font-bold">Improved creativity</h1>

                <h1 className="text-4xl w-[75%] font-bold">Save time, enhance productivity</h1>
                <p className="text-[14px] pr-32">{"No more tedious manual editing or outsourcing to graphic designers. Colorfill empowers you to instantly change the color of your images, allowing you to focus on other important tasks and projects."}</p>

            </div>

            <div className=" w-1/2 flex items-center ">
                <Image src="/icons/service2.svg" alt="service1" width={500} height={500} className="w-[60%]"/>
            </div>

        </div>
        
        <div className="div3 flex items-center justify-around h-[24rem]">

            <div className="w-1/2 flex flex-col gap-5">
                
                <h1 className="gradientText2 font-bold">Ease of use</h1>

                <h1 className="text-4xl  font-bold">Elevate user experience</h1>
                <p className="text-[14px] pr-24">{"Color plays a crucial role in user experience. By using Colorfill to customize your images, you can create visually appealing content that captivates and engages your audience, leaving a lasting impression."}</p>

            </div>

            <div className=" w-1/2 flex items-center justify-center">
                <Image src="/icons/service3.svg" alt="service1" width={500} height={500} className="w-[60%]"/>
            </div>

        </div>

        <div className="div4 flex flex-row-reverse items-center justify-around h-[24rem]">

            <div className="w-1/2 flex flex-col gap-5">
                
                <h1 className="gradientText2 font-bold">Improved creativity</h1>

                <h1 className="text-4xl w-[75%] font-bold">Unleash your creativity anywhere, anytime</h1>
                <p className="text-[14px] pr-24">{"Colorfill is designed to be fast and responsive, allowing you to edit your images on the go. Whether you're using it on your desktop or mobile device, you can enjoy the convenience of creating stunning visuals wherever inspiration strikes."}</p>

            </div>

            <div className=" w-1/2 flex items-center ">
                <Image src="/icons/service2.svg" alt="service1" width={500} height={500} className="w-[60%]"/>
            </div>

        </div>

    </section>
  )
}

export default AllFeatures