
import Image from "next/image";

type Props = {}

const AllServices = (props: Props) => {
  return (
    <section className='bg-white px-5 md:px-20'>

        <div className="div1 flex items-center justify-around h-[28rem] ">

            <div className="w-1/2 flex flex-col gap-5 ">
                
                <h1 className="gradientText2 font-bold">Change colors</h1>

                <h1 className="text-4xl w-[70%] font-bold">Instantly change colors with a single click</h1>
                <p className="text-[13px] pr-20">Gone are the days of spending hours manually editing each image. With Colorfill, you can now change the color of any image automatically with just one click, saving you valuable time and effort.</p>

            </div>

            <div className=" w-1/2 flex items-center justify-center">
                <Image src="/icons/service1.svg" alt="service1" width={500} height={500} className="w-[60%]"/>
            </div>

        </div>

        <div className="div2 flex flex-row-reverse items-center justify-around h-[24rem]">

            <div className="w-1/2 flex flex-col gap-5">
                
                <h1 className="gradientText2 font-bold">Improved creativity</h1>

                <h1 className="text-4xl w-[75%] font-bold">Your creativity, unlimited possibilities</h1>
                <p className="text-[13px] pr-20">With Colorfill, you have the power to transform any image into a work of art. Simply choose a color palette and watch as your images come to life in vibrant hues and shades.</p>

            </div>

            <div className=" w-1/2 flex items-center ">
                <Image src="/icons/service2.svg" alt="service1" width={500} height={500} className="w-[60%]"/>
            </div>

        </div>
        
        <div className="div1 flex items-center justify-around h-[28rem]">

            <div className="w-1/2 flex flex-col gap-5">
                
                <h1 className="gradientText2 font-bold">Ease of use</h1>

                <h1 className="text-4xl  font-bold">Simple. Easy. Stunning.</h1>
                <p className="text-[13px] pr-20">{"No need for complicated software or technical skills. Colorfill offers a user-friendly interface that makes it easy for anyone to create professional quality image variations. Whether you're a designer or just someone who loves playing with colors, Colorfill is the perfect tool for you."}</p>

            </div>

            <div className=" w-1/2 flex items-center justify-center">
                <Image src="/icons/service3.svg" alt="service1" width={500} height={500} className="w-[60%]"/>
            </div>

        </div>

    </section>
  )
}

export default AllServices