import explorphysics from "../../../assets/academy/images/explorecard.png";
import avatar from "../../../assets/academy/images/avarta.png";

function ExploreCard() {
  return (
    <div className="flex flex-col justify-start h-content rounded-md shadow hover:scale-105 transition-transform duration-300">
    <div className="relative" >
      <img src={explorphysics} className="w-full"  alt="" />
      <div className=" absolute flex justify-center items-center inset-0  w-20 rounded-full m-4 h-8 bg-red-200 text-1xl">Physics</div>
    </div>
    <div className="flex flex-col p-6 gap-y-3">
    <h4 className="text-2xl font-bold">Sed do eiusmod tempor</h4>
    <div className="flex space-x-4">
      <div className="w-7 h-7  rounded-full">
        <img src={avatar} className="w-full h-full" alt="" />
      </div>
      <p className="text-1xl text-textGrey">Ohta Kin</p>
    </div>
    <div className="flex justify-between items-center">
      <div className="text-2xl font-bold">$24</div>
      <div className="border-academyPrimary border-2 text-academyPrimary px-2 py-1 rounded-md hover:cursor-pointer hover:bg-academyPrimary hover:text-white">
        START NOW
      </div>
    </div>
    </div>
    
</div>
  )
}

export default ExploreCard