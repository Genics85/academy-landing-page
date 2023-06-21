import { InlineIcon } from "@iconify/react/dist/iconify.js";


type cardProp = {
    image:string,
    topic:string,
    title:string,
}

function EventCard({image,topic,title}:cardProp) {
  return (
    <div className="flex flex-col md:flex-row w-full rounded-md shadow-md hover:scale-105 transition-transform duration-300">
    <div className="relative md:w-1/4">
        <img src={image} className="w-full h-full" alt="" />
        <div className="absolute w-fit h-fit rounded-full inset-0 bg-academyBg px-3 py-1 m-4">
            {topic}
        </div>
    </div>
    <div className="p-8 w-full flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="flex flex-col gap-3">
            <h4 className="text-2xl font-bold">
                {title}
            </h4>
            <p className="text-textGrey flex items-center gap-2"><InlineIcon icon={"akar-icons:schedule"} /> <span>5,April,2020 | 3:00pm - 5:00pm</span> </p>
        </div>
        <button className="border-2 rounded-md border-academyPrimary text-academyPrimary px-2 py-1 hover:bg-academyPrimary hover:text-white shadow-md">
            ENROLL
        </button>
    </div>
</div>
  )
}

export default EventCard