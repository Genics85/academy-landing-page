import { InlineIcon } from '@iconify/react/dist/iconify.js'
import dina from "../../../assets/academy/images/dina.png"

function TestimonialCard() {
  return (
    <div className='w-2/3 md:w-1/3 max-w-fit p-8 bg-white flex rounded-md flex-col gap-4 items-start shadow'>
        <div className="flex ">
            <InlineIcon className='text-yellow-400 text-2xl' icon="gridicons:star"/>
            <InlineIcon className='text-yellow-400 text-2xl' icon="gridicons:star"/>
            <InlineIcon className='text-yellow-400 text-2xl' icon="gridicons:star"/>
            <InlineIcon className='text-yellow-400 text-2xl' icon="gridicons:star"/>
            <InlineIcon className='text-yellow-400 text-2xl' icon="gridicons:star"/>
        </div>
        <p className=''>Ullamco tem amet irure tempor cupidatat proident non.</p>
        <div className="flex gap-4 items-center">
            <div className="w-10 h-10 rounded-full shadow">
                <img src={dina} alt="" />
            </div>
            <p className='font-bold'>Dina Gienn</p>
        </div>
    </div>
  )
}

export default TestimonialCard