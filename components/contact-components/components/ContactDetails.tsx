import Image from 'next/image'

type Props = {}

const ContactDetails = (props: Props) => {
  return (
    <section className="md:w-1/2 p-10 flex flex-col items-center justify-start mt-10 gap-6 pl-20 md:pl-40">
          
        <div className="div1 flex items-center justify-around gap-5 ">

            <div className="bg-[#6B7CFF] rounded-full w-8 h-8 p-2">
                <Image src="/icons/phone.svg" alt="phone" width={50} height={50} className="w-full h-full"/>
            </div>
            <div >
                <h1 className="font-bold text-sm w-60">+ 1800 145 276</h1>
                <p className="text-gray-500 text-xs ">Free support</p>
            </div>
                
        </div>

        <div className="div2 flex items-center justify-around gap-5 ">

            <div className="bg-[#6B7CFF] rounded-full w-8 h-8 p-2">
                <Image src="/icons/email.svg" alt="phone" width={50} height={50} className="w-full h-full"/>
            </div>
            <div >
                <h1 className="font-bold text-sm w-60">info@colorfill.co</h1>
                <p className="text-gray-500 text-xs ">Help Email support</p>
            </div>
                
        </div>

        <div className="div3 flex items-center justify-around gap-5 ">

            <div className="bg-[#6B7CFF] rounded-full w-8 h-8 p-2">
                <Image src="/icons/sales.svg" alt="phone" width={50} height={50} className="w-full h-full"/>
            </div>
            <div >
                <h1 className="font-bold text-sm w-60">sales@colorfill.co</h1>
                <p className="text-gray-500 text-xs ">Sales Enquiry</p>
            </div>
                
        </div>

    </section>
  )
}

export default ContactDetails