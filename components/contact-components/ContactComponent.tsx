import { Bussiness } from '../Bussiness'
import ContactDetails from './components/ContactDetails'
import ContactForm from "./components/ContactForm"

type Props = {}

const ContactComponent = (props: Props) => {
  return (
    <section className="flex flex-col gap-5 ">
            <h1 className="text-3xl md:text-4xl font-bold text-center my-10">
                Get in touch with us</h1>

            <div className="w-[90%] md:w-[80%]  bg-[#F0F2FE] m-auto flex flex-col md:flex-row items-start justify-around rounded-2xl      py-10 md:py-16  ">

                  <ContactForm/>
                  <ContactDetails/>

             </div>

             <Bussiness/>
    </section>
  )
}

export default ContactComponent