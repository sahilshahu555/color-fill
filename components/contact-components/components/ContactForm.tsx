"use client"

import React from 'react'

type Props = {}

const ContactForm = (props: Props) => {
  return (
   <form className="flex flex-col gap-2 w-[80%] md:w-1/2 md:pl-14 m-auto text-sm ">
     <h1 className="text-2xl font-bold">Drop us a message</h1>
     <p className="text-sm mb-4">We will get back to you as soon as possible.</p>

     <div className="flex items-center  gap-2 w-full">
       <input type="text" placeholder="Full name" name="fullName" className="p-2 pl-5 placeholder-black w-[50%] rounded" />

       <input type="text" placeholder="Company name" name="companyName" className="p-2 pl-5 placeholder-black w-[50%] rounded" />
     </div>

     <input type="text" placeholder="Work Email" name="workEmail" className="p-2 pl-5 placeholder-black rounded" />

     <input type="text" placeholder="Subject" name="subject" className="p-2 pl-5 placeholder-black rounded" />

     <textarea  placeholder="Message" name="message" rows={3}className="p-2 pl-5 placeholder-black rounded" />

     <button className=" text-sm text-white bg-[#0F172A] py-2 rounded-lg active:scale-95  hover:bg-[#313852] hover:text-white " onClick={(e)=>{e.preventDefault()}}>Send</button>

   </form>
  )
}

export default ContactForm