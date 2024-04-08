import React from 'react'
import { Hero } from './1hero/Hero'

type Props = {}

const HomeComponent = (props: Props) => {
  return (
    <div className="px-20 ">
        <Hero/>
    </div>
  )
}

export default HomeComponent