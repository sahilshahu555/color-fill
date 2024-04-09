import Link from "next/link"
type Props = {}

export const Bussiness = (props: Props) => {
  return (
    <section className="flex flex-col items-center justify-center  gap-6 my-20">
       
       <h1 className="text-4xl w-[50%] font-bold text-center">Are you ready to grow your business with us? </h1>
       <p className="text-[11px] pr-20 w-1/2 ml-20 text-center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>

      <Link href="/">
        <button className= " link1 bg-black text-white text-sm font-semibold px-8 py-3 rounded-lg active:scale-95 hover:bg-[#313852]">View Pricing</button>
      </Link>

    </section>
  )
}

export default Bussiness