import { Bussiness } from '../Bussiness'
import PricingPlan from "./components/PricingPlan"
import Questions from './components/Questions'
import Card from './components/Card'


type Props = {}

const PricingComponent = (props: Props) => {
  return (
    <section>
        <PricingPlan/>
        <div className="flex items-center justify-center mt-5 mb-16">
           <Card/>
        </div>
        <Questions/>
        <Bussiness/>
    </section>
  )
}

export default PricingComponent