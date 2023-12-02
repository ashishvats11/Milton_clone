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


        <div className='lg:grid grid-cols-3 gap-7'>


            <div className='flex flex-col gap-2'>
                <div className='flex justify-center items-center bg-gray-200 rounded-3xl h-96  '>
                    <img src={g1} className='  w-80 h-80 object-contain hover:scale-110 transition ease-in-out duration-500'></img>
                </div>
                { <div className='flex flex-col gap-2'>
                    <div className='flex justify-start'>
                        <p className='bg-gray-200 inline px-4 py-1 rounded-2xl '>Cross-Device Sync</p>
                    </div>
                    <div className=''>
                        <p className='text-start'>Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.</p>
                    </div>
                </div> }
            </div>
 
            
            <div className='flex flex-col gap-2'>
                <div className='flex justify-center items-center bg-gray-200 rounded-3xl h-96'>
                    <img src={g2}
                    className=' w-96 h-96 object-contain hover:scale-110 transition ease-in-out duration-500'></img>
                </div>
                { <div className='flex flex-col gap-1'>
                    <div className='flex justify-start'>
                        <p className='bg-orange-200 inline px-4 py-1 rounded-2xl '>Auto Event Import</p>
                    </div>
                    <div className=''>
                        <p className='text-start'>Automatically import events from emails, social media, and other sources, so you never miss a beat or have to manually input details.</p>
                    </div>
                </div> }
            </div>


            <div className='flex flex-col gap-2'>
                <div className='flex justify-center items-center bg-gray-200 rounded-3xl h-96'>
                    <img src={g3} 
                    className=' w-96 h-96 object-contain hover:scale-110 transition ease-in-out duration-500'></img>
                </div>
                { <div className='flex flex-col gap-1'>
                    <div className='flex justify-start'>
                        <p className='bg-blue-100 inline px-4 py-1 rounded-2xl '>Task Delegation</p>
                    </div>
                    <div className=''>
                        <p className='text-start'>Easily assign tasks to team members, family, or friends, promoting shared responsibility and seamless collaboration.</p>
                    </div>
                </div> }
            </div>



            <div className='flex flex-col gap-2'>
                <div className='flex justify-center items-center bg-gray-200 rounded-3xl h-96'>
                    <img src={g4}
                     className=' w-96 h-96 object-contain hover:scale-110 transition ease-in-out duration-500'></img>
                </div>
                { <div className='flex flex-col gap-1'>
                    <div className='flex justify-start'>
                        <p className='bg-green-100 inline px-4 py-1 rounded-2xl '>Voice Command Integration</p>
                    </div>
                    <div className=''>
                        <p className='text-start'>Quickly create events, set reminders, or reschedule appointments with voice commands, thanks to compatibility with popular virtual assistants.</p>
                    </div>
                </div> }
            </div>

            

            <div className='flex flex-col gap-2'>
                <div className='flex justify-center items-center bg-gray-200 rounded-3xl h-96'>
                    <img src={g5}
                    className=' w-80 h-80 object-contain hover:scale-110 transition ease-in-out duration-500'></img>
                </div>
                { <div className='flex flex-col gap-1'>
                    <div className='flex justify-start'>
                        <p className='bg-red-200 inline px-4 py-1 rounded-2xl '>Customizable Alerts</p>
                    </div>
                    <div className=''>
                        <p className='text-start'>Personalize notification types and timings for events, tasks, and goals, ensuring you stay on track and informed without feeling overwhelmed.</p>
                    </div>
                </div> }
            </div>


            <div className='flex flex-col gap-2'>
                <div className='flex justify-center items-center bg-gray-200 rounded-3xl h-96'>
                    <img src={g6} className=' w-80 h-80 object-contain hover:scale-110 transition ease-in-out duration-500 '></img>
                </div>
                { <div className='flex flex-col gap-1'>
                    <div className='flex justify-start'>
                        <p className='bg-purple-400 inline px-4 py-1 rounded-2xl '>Privacy Protection</p>
                    </div>
                    <div className=''>
                        <p className='text-start'>Safeguard your personal information and event details with our robust security measures, including end-to-end encryption and optional password protection.</p>
                    </div>
                </div> }
            </div>


            
            
          
            

        </div>
      
    </div>
  )
}

export default Grid
