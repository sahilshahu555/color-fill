import Transform from "./components/Transform";
import AllServices from "./components/AllServices"


type Props = {}

export const Services = (props: Props) => {
  return (
    <div>
      <Transform/>
      <AllServices/>
    </div>
  )
}

export default Services