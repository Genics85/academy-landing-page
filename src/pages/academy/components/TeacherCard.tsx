import fb from "../../../assets/academy/images/fb.png"

type cardProp = {
    img:string,
    name:string,
    subject:string,
}

function TeacherCard({img,name,subject}:cardProp) {
  return (
    <div className="flex w-1/4 min-w-max items-center bg-white shadow rounded-md flex-col gap-3 p-4">
    <div className="relative rounded-full flex justify-center">
        <img src={img} className="" alt="" />
        <img src={fb} className="absolute right-2 -bottom-0" />
    </div>
    <p className="font-bold">{name}</p>
    <p className="text-textGrey">{subject}</p>
</div>
  )
}

export default TeacherCard