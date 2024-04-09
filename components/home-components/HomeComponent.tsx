import React from 'react'
import { Hero } from './1hero/Hero'
import { Services } from './2services/Services'
import { HowItWorks } from './3howItWorks/HowItWorks'



type Props = {}

const HomeComponent = (props: Props) => {
  return (
    <div className=" ">
        <Hero/>
        <Services/>
        <HowItWorks/>
    </div>
  )
}

export default HomeComponent