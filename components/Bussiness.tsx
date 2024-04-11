import Link from "next/link"
type Props = {}

export const Bussiness = (props: Props) => {
  return (
    <section className="flex flex-col items-center justify-center  gap-6 py-16
    bg-[radial-gradient(ellipse_at_bottom_center,_var(--tw-gradient-stops))] from-[#C7E8F3] via-white to-white">
       
       <h1 className=" text-2xl md:text-3xl lg:text-4xl md:w-[50%] font-bold text-center">Are you ready to grow your business with us? </h1>
       <p className="text-[11px] md:pr-20 w-[75%] md:w-1/2 md:ml-20 text-center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>

      <Link href="/">
        <button className= " link1 bg-black text-white text-sm font-semibold px-8 py-3 rounded-lg active:scale-95 hover:bg-[#313852]">View Pricing</button>
      </Link>

    </section>
  )
}

export default Bussiness