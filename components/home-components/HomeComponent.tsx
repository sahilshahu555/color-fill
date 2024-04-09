import React from 'react'
import { Hero } from './1hero/Hero'
import { Services } from './2services/Services'


type Props = {}

const HomeComponent = (props: Props) => {
  return (
    <div className=" ">
        <Hero/>
        <Services/>
    </div>
  )
}

export default HomeComponent