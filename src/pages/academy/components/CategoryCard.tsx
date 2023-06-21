
type cardProp = {
    name:string,
    icon:string,
    bgcolor:string,
}

function CategoryCard({name,icon,bgcolor}:cardProp) {
  return (
    <div className={`flex flex-col w-28 justify-center items-center p-6 gap-y-3 rounded-md ${bgcolor}`}>
        <div className='w-12 flex items-center justify-center h-12 rounded-full bg-white shadow'>
            <img className="w-2/5" src={"../"+icon} alt="" />
        </div>
        <p>{name}</p>
    </div>
  )
}

export default CategoryCard