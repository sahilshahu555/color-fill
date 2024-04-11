import { Bussiness } from '../Bussiness'
import PricingPlan from "./components/PricingPlan"
import Questions from './components/Questions'
import Card from './components/Card'

type Props={}

type PlanType = {
      id:string,
      icon:string,
      title:string,
      planType:string,
      benefits:{icon:string,item:string}[],
      desc:string,
      amount:string,
      period:string,  

}




const PricingComponent = (props: Props) => {

  const plans=[

    { 
      id:"1",
      icon:"/icons/plan1.svg",
      title:"Regular",
      planType:"Starter Plan",
      benefits:[
        {
          icon:"/icons/tick.svg",
          item:"Limited Projects",
        },
        {
          icon:"/icons/tick.svg",
          item:"Regular Support Business",
        },
        {
          icon:"/icons/tick.svg",
          item:"1 month Free Trial",
        },
        {
          icon:"/icons/tick.svg",
          item:"3GB storage",
        },
        {
          icon:"/icons/tick.svg",
          item:"Ads Preview",
        },
      ],
      desc:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
      amount:"Free",
      period:"For Limited Period",

    },

    { 
      id:"2",
      icon:"/icons/plan2.svg",
      title:"Plantinum",
      planType:"For the best results",
      benefits:[
        {
          icon:"/icons/tick.svg",
          item:"Limited Projects",
        },
        {
          icon:"/icons/tick.svg",
          item:"Regular Support Business",
        },
        {
          icon:"/icons/tick.svg",
          item:"1 month Free Trial",
        },
        {
          icon:"/icons/tick.svg",
          item:"20GB storage",
        },
        {
          icon:"/icons/tick.svg",
          item:"Ads Preview",
        },
      ],
      desc:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
      amount:"$342",
      period:"For Limited Period",

    },

    { 
      id:"3",
      icon:"/icons/plan3.svg",
      title:"Standard",
      planType:"Most popular",
      benefits:[
        {
          icon:"/icons/tick.svg",
          item:"Limited Projects",
        },
        {
          icon:"/icons/tick.svg",
          item:"Regular Support Business",
        },
        {
          icon:"/icons/tick.svg",
          item:"1 month Free Trial",
        },
        {
          icon:"/icons/tick.svg",
          item:"10GB storage",
        },
        {
          icon:"/icons/tick.svg",
          item:"Ads Preview",
        },
      ],
      desc:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
      amount:"$234",
      period:"For Limited Period",

    },

  ]

  return (
    <section className="bg-gradient-to-tr from-[#E6F5F6]  to-[#F1F9FB]">
      <PricingPlan/>

      <div className="flex flex-col md:flex-row items-center justify-center mt-5 mb-16 w-[90%] m-auto gap-14 md:gap-5 lg:gap-14 ">

        {plans.map((plan:PlanType,index)=>( <Card plan={plan} key={plan.id} /> ))}

      </div>

      <Questions/>

      {/* <div className="bg-white"> */}
      <Bussiness/>
      {/* </div> */}
    </section>
  )
}

export default PricingComponent