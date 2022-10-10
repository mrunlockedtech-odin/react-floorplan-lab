import Bedroom from "./Bedroom";
import Bath from "./Bath";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";

const FloorPlan = () => {
  return ( 
    <>
      <Bedroom number={1}/>
      <Kitchen />
      <Bath />
      <Bedroom number={1}/>
      <LivingRoom />
      <Bath />
      <Bedroom number={1}/>
    </>

   );
}
 
export default FloorPlan;