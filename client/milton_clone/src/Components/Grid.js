import React from 'react'
import g1 from "../assets/gird/g1.svg"
import g2 from "../assets/gird/g2.svg"
import g3 from "../assets/gird/g3.svg"
import g4 from "../assets/gird/g4.webp"
import g5 from "../assets/gird/g5.webp"
import g6 from "../assets/gird/g6.webp"
function Grid() {
  return (
    <div className='bg-orange-50 pt-40 px-20 flex flex-col gap-10'>
        <div className='flex flex-col gap-1'>
            <div>
                <p className='bg-gray-200 inline px-4 py-1 rounded-2xl'>Ans so much more...💼</p>
            </div>
            <div>
                <p className='text-6xl font-bold'> Our features to make your life easier</p>
            </div>
        </div>
        <div className='lg:grid grid-cols-3 gap-3'>
            <div className='flex flex-col gap-2'>
                <div className='inline bg-gray-200'>
                    <img src={g1} className='p-4'></img>
                </div>
                { <div className='flex flex-col gap-1'>
                    <div className='flex justify-start'>
                        <p className='bg-gray-200 inline px-4 py-1 rounded-2xl '>Cross-Device Sync</p>
                    </div>
                    <div className=''>
                        <p className='text-start'>Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.</p>
                    </div>
                </div> }
            </div>
            <div className='flex flex-col gap-2'>
                <div className='inline bg-gray-200'>
                    <img src={g2
                    } className='p-4'></img>
                </div>
                { <div className='flex flex-col gap-1'>
                    <div className='flex justify-start'>
                        <p className='bg-gray-200 inline px-4 py-1 rounded-2xl '>Cross-Device Sync</p>
                    </div>
                    <div className=''>
                        <p className='text-start'>Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.</p>
                    </div>
                </div> }
            </div>
            <div className='flex flex-col gap-2'>
                <div className='inline bg-gray-200'>
                    <img src={g3} className='p-4'></img>
                </div>
                { <div className='flex flex-col gap-1'>
                    <div className='flex justify-start'>
                        <p className='bg-gray-200 inline px-4 py-1 rounded-2xl '>Cross-Device Sync</p>
                    </div>
                    <div className=''>
                        <p className='text-start'>Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.</p>
                    </div>
                </div> }
            </div>
            <div className='flex flex-col gap-2'>
                <div className='inline bg-gray-200'>
                    <img src={g4} className='p-4'></img>
                </div>
                { <div className='flex flex-col gap-1'>
                    <div className='flex justify-start'>
                        <p className='bg-gray-200 inline px-4 py-1 rounded-2xl '>Cross-Device Sync</p>
                    </div>
                    <div className=''>
                        <p className='text-start'>Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.</p>
                    </div>
                </div> }
            </div>
            <div className='flex flex-col gap-2'>
                <div className='inline bg-gray-200'>
                    <img src={g5} className='p-4'></img>
                </div>
                { <div className='flex flex-col gap-1'>
                    <div className='flex justify-start'>
                        <p className='bg-gray-200 inline px-4 py-1 rounded-2xl '>Cross-Device Sync</p>
                    </div>
                    <div className=''>
                        <p className='text-start'>Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.</p>
                    </div>
                </div> }
            </div>
            <div className='flex flex-col gap-2'>
                <div className='inline bg-gray-200'>
                    <img src={g6} className='p-4'></img>
                </div>
                { <div className='flex flex-col gap-1'>
                    <div className='flex justify-start'>
                        <p className='bg-gray-200 inline px-4 py-1 rounded-2xl '>Cross-Device Sync</p>
                    </div>
                    <div className=''>
                        <p className='text-start'>Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.</p>
                    </div>
                </div> }
            </div>

            
          
            

        </div>
      
    </div>
  )
}

export default Grid
