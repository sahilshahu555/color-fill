

type Props = {}

const Transform = (props: Props) => {
  return (
    <div className="  bg-gradient-to-r from-[#D7F5EC] via-[#D2E6F6] to-[#D2E6F6]  pt-16">

       <h1 className=" text-3xl  md:text-[35px]  font-bold  text-center w-[40%] m-auto tracking-wide leading-10 mb-6">Transform your images with colorfill</h1>

       <div className="bg-[#F1FAFB] h-[28rem] w-[90%] rounded-tr-[50px] flex 
       items-center justify-around gap-10">

        <div className="flex flex-col " >

           <button className="px-[2px] py-[16px] rounded-[11px]  font-bold text-xs active:scale-95 bg-gradient-to-tr from-[#373FFF]  to-[#3ACAF8] ">
            <span className="bg-[#F1FAFB] px-[24px] py-[15px] rounded-[9px]">Brand assets</span></button>
           <button>Art</button>
           <button>Illustration</button>
           <button>Photographs</button>


        </div>

        

        <div className="" ></div>

       </div>

    </div>
  )
}

export default Transform