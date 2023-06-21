import {Link} from "react-router-dom"

type cardProps = {
    img:string,
    name:string,
    to:string,
}

function PagesCard({img,name,to}:cardProps) {
  return (
    <a href={to} className='' target="_blank">
        <div className="group relative h-fit rounded-md shadow-lg shadow-[#00a6fb] bg-white hover:cursor-pointer">
          <img src={img} alt="" />
          <div className="absolute inset-0 opacity-80 hover:opacity-0 z-10 w-full h-full bg-black rounded-md"></div>
          <div className="group-hover:hidden absolute mx-auto my-auto h-fit w-fit z-20 inset-0 text-white font-bold text-4xl">
            {name}
          </div>
        </div>
    </a>
  )
}

export default PagesCard