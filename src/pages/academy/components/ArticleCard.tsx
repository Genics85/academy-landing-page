import explorphysics from "../../../assets/academy/images/explorecard.png";

function ArticleCard() {
  return (
    <div className="flex flex-col justify-start h-content rounded-md shadow hover:scale-105 transition-transform duration-300">
    <div className="relative" >
      <img src={explorphysics} className="w-full"  alt="" />
    </div>
    <div className="flex flex-col p-6 gap-y-3">
    <h4 className="text-2xl font-bold">Sed do eiusmod tempor</h4>
    <div className="flex space-x-4">
      <p className="text-1xl text-textGrey">5th May,2020</p>
    </div>
    </div>
</div>
  )
}

export default ArticleCard