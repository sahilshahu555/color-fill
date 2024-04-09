
import Image  from "next/image"
type Props = {}

const Transform = (props: Props) => {
  return (
    <div className="  bg-gradient-to-r from-[#D7F5EC] via-[#D2E6F6] to-[#D2E6F6]  pt-16">

       <h1 className=" text-3xl  md:text-[35px]  font-bold  text-center w-[40%] m-auto tracking-wide leading-10 mb-6">Transform your images with colorfill</h1>

       <div className="bg-[#F1FAFB] h-[26rem] w-[90%] rounded-tr-[50px] flex 
       items-center justify-around ">

        <div className="flex flex-col pl-36  gap-7 w-1/2" >  

            <button className="active:scale-95 bg-gradient-to-tr from-[#373FFF] to-[#3ACAF8] w-fit px-0.5 py-0.5 rounded-lg flex items-center">
            <span className=" bg-[#F1FAFB] px-6 py-2.5 rounded-md font-bold text-xs  ">Brand assets </span></button>

            <button className="active:scale-95 bg-gradient-to-tr from-[#373FFF] to-[#3ACAF8] w-fit px-0.5 py-0.5 rounded-lg flex items-center">
            <span className=" bg-[#F1FAFB] px-6 py-2.5 rounded-md font-bold text-xs  ">Art</span></button>

            <button className="active:scale-95 bg-gradient-to-tr from-[#373FFF] to-[#3ACAF8] w-fit px-0.5 py-0.5 rounded-lg flex items-center">
            <span className=" bg-[#F1FAFB] px-6 py-2.5 rounded-md font-bold text-xs  ">Illustration</span></button>

            <button className="active:scale-95 bg-gradient-to-tr from-[#373FFF] to-[#3ACAF8] w-fit px-0.5 py-0.5 rounded-lg flex items-center">
            <span className=" bg-[#F1FAFB] px-6 py-2.5 rounded-md font-bold text-xs  ">Photographs</span></button>
           
        </div>

        <div className="flex items-center  w-1/2 " >
            <Image src="/images/transformed.png" alt="Transformed" width={1000} height={1000} className="w-[21rem] h-[21rem] "/>
        </div>

       </div>

    </div>
  )
}

export default Transform