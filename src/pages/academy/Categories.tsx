import CategoryCard from './components/CategoryCard';
import math from "../../assets/academy/images/math.png";
import physics from "../../assets/academy/images/physics.png";
import chemistry from "../../assets/academy/images/chemistry.png";
import informatics from "../../assets/academy/images/informatics.png";

function Categories() {
  return (
    <main className="p-4 md:p-20 bg-white gap-y-7 min-h-full flex flex-col items-center">
        <p  className="text-textGrey text-sm">EXPLORE NOW</p>
        <h3 className="font-bold text-4xl">Categories</h3>
        <p className="text-textGrey">Eu sint amet enim eiusmod ipsum commodo <br/> non pariatur excepteur tempor exercitation fugiat.</p>
        <div className='flex gap-x-5 overflow-x-auto w-full justify-center'>
            <CategoryCard name="Math" bgcolor="bg-academyBg" icon={math}/>
            <CategoryCard name="Physics" bgcolor="bg-red-100" icon={physics}/>
            <CategoryCard name="Chemistry" bgcolor="bg-green-100" icon={chemistry}/>
            <CategoryCard name="Informatics" bgcolor="bg-pink-100" icon={informatics}/>
        </div>
        <button className="px-3 py-1 text-sm rounded-md border-2 border-academyPrimary text-academyPrimary hover:bg-academyPrimary hover:text-white">
          EXPLORE ALL
        </button>
    </main>
  )
}

export default Categories