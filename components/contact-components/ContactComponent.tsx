import { Bussiness } from '../Bussiness'
import ContactDetails from './components/ContactDetails'
import ContactForm from "./components/ContactForm"

type Props = {}

const ContactComponent = (props: Props) => {
  return (
    <section className="flex flex-col gap-5  bg-[radial-gradient(ellipse_at_left_center,_var(--tw-gradient-stops))] from-[#C7E8F3] via-white to-white">
           
            <h1 className="text-3xl md:text-4xl font-bold text-center my-10">
                Get in touch with us</h1>

            <div className="w-[90%] md:w-[80%]  bg-[#F0F2FE] m-auto flex flex-col md:flex-row items-start justify-around rounded-2xl      py-10 md:py-16  ">

                  <ContactForm/>
                  <ContactDetails/>

             </div>

             
    </section>
  )
}

export default ContactComponent