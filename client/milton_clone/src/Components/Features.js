import React from 'react'
import f1 from '../assets/features/f1.webp'
import f2 from '../assets/features/f2.webp'
import f3 from '../assets/features/f3.webp'
import f4 from '../assets/features/f4.webp'
import bit1 from '../assets/bitmoji/bit1.webp'
import bit2 from '../assets/bitmoji/bit2.webp'
import bit3 from '../assets/bitmoji/bit3.webp'
import bit4 from '../assets/bitmoji/bit4.webp'
function Features() {
  return (
    <div className='bg-orange-50 pt-48  px-48 flex flex-col gap-52'>
        <div className=' flex flex-col gap-2'>

            <div>
                <p className='bg-gray-200 inline rounded-2xl px-4 py-1'>Our main features🦸🏼</p>
            </div>
            <div>
                <p className='font-bold text-5xl'> Discover your new superpowers</p>
            </div>
        </div>
        <div className='flex flex-row gap-8'>
            <div className='felx flex-col '>
                <div className='flex flex-col gap-2'>
                    <div className='flex justify-start'>
                        <p className='bg-orange-300 inline rounded-2xl px-3 py-1 font-medium'>Seamless Scheduling</p>
                    </div>
                    <div>
                        <p className='text-4xl font-bold text-start'>Focus on what matters most for you</p>
                    </div>
                    

                </div>

                <div className='mt-10'>
                    <p className='text-start text-gray-500 text-lg'>Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks.</p>
                </div>

                {/*Sticker*/}
                <div className='relative flex justify-start items-center flex-row mt-20'>
                    <div className="relative flex flex-row justify-start">
                       <div className="  mt-20">
                            <img src={bit1} className='w-12 scale-150'></img>
                         </div>
                        <div>
                        <div className="bg-gray-800 text-white px-4 pt-2 flex flex-col w-80 rounded-t-2xl rounded-r-2xl relative">
                            <div className="inline pb-2">
                                <p className="text-start font-medium">I'm not the most organized person, but this app has made it so easy for me to stay on top of things! </p>
                            </div>
                            <div className="inline">
                                <p className="text-start text-gray-300 font-medium">Adam, Solo Founder</p>
                            </div>
                            
                        </div>
                        </div>
                      
                    </div>
                </div>


            </div>
            <div>
                <img src={f1}></img>
            </div>


        </div>

        {/*Feature 2*/}

        <div className='flex flex-row gap-11 '>
            <div className=''>
                <img className='w-full scale-150'src={f2}></img>
            </div>
            <div className='felx flex-col '>
                <div className='flex flex-col gap-1'>
                    <div className='flex justify-start'>
                        <p className='bg-blue-100 inline rounded-2xl px-3 py-1 font-medium'>Smart Reminders & Task</p>
                    </div>
                    <div>
                        <p className='text-4xl font-bold text-start'>Never miss an important deadline or event again</p>
                    </div>

                </div>
                <div className='mt-10'>
                    <p className='text-start text-gray-500 text-lg'>Never miss an important deadline again with our AI-driven  notifications. Our app intelligently analyzes your schedule to prioritize what's most important, keeping you on track and ensuring your day is productive and stress-free.</p>
                </div>

                {/*Sticker*/}
                <div className='relative flex justify-center items-center flex-row mt-14'>
                    <div className="relative flex flex-row justify-start">
                       <div className="  mt-20">
                            <img src={bit2} className='w-12 scale-150'></img>
                         </div>
                        <div>
                        <div className="bg-gray-800 text-white px-4 pt-2 flex flex-col w-80 rounded-t-2xl rounded-r-2xl relative">
                            <div className="inline pb-2">
                                <p className="text-start font-medium">I love how user-friendly this app is! It's so easy to add events and set reminders! </p>
                            </div>
                            <div className="inline">
                                <p className="text-start text-gray-300 font-medium">Adam, entrepreneur</p>
                            </div>
                            
                        </div>
                        </div>
                      
                    </div>
                </div>

                
            </div>
           


        </div>

        {/*Feature 3*/}

        <div className='flex flex-row gap-3 '>
            <div className='felx flex-col '>
                <div className='flex flex-col gap-1'>
                    <div className='flex justify-start'>
                        <p className='bg-green-100 inline rounded-2xl px-3 py-1 font-medium'>Seamless Scheduling</p>
                    </div>
                    <div>
                        <p className='text-4xl font-bold text-start'>Focus on what matters most for you</p>
                    </div>

                </div>
                <div className='mt-10'>
                    <p className='text-start text-gray-500 text-lg mr-12'>Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks.</p>
                </div>

                {/*Sticker*/}
                <div className='relative flex justify-start items-center flex-row mt-14'>
                    <div className="relative flex flex-row justify-start">
                       <div className="  mt-20">
                            <img src={bit3} className='w-12 scale-150'></img>
                         </div>
                        <div>
                        <div className="bg-gray-800 text-white px-4 pt-2 flex flex-col w-80 rounded-t-2xl rounded-r-2xl relative">
                            <div className="inline pb-2">
                                <p className="text-start font-medium">I've tried a lot of calendar apps, but this one is by far the best! It's so intuitive and customizable, and it has all the features I need. </p>
                            </div>
                            <div className="inline">
                                <p className="text-start text-gray-300 font-medium">Annie, Designer</p>
                            </div>
                            
                        </div>
                        </div>
                      
                    </div>
                </div>
            </div>
            <div>
                <img className="scale-150" src={f3} ></img>
            </div>


        </div>

        {/*Feature 4*/}

        <div className='flex gap-10'>
        <div>
                <img className="scale-125"src={f4}></img>
            </div>
            <div className='felx flex-col '>
                <div className='flex flex-col gap-1'>
                    <div className='flex justify-start'>
                        <p className='bg-red-100 inline rounded-2xl px-3 py-1 font-medium'>Smart Reminders & Task</p>
                    </div>
                    <div>
                        <p className='text-4xl font-bold text-start'>Never miss an important deadline or event again</p>
                    </div>

                </div>
                <div className='mt-10'>
                    <p className='text-start text-gray-500 text-lg'>Never miss an important deadline again with our AI-driven  notifications. Our app intelligently analyzes your schedule to prioritize what's most important, keeping you on track and ensuring your day is productive and stress-free.</p>
                </div>
                {/*Sticker*/}
                <div className='relative flex justify-center items-center flex-row mt-14'>
                    <div className="relative flex flex-row justify-start">
                       <div className="  mt-20">
                            <img src={bit4} className='w-12 scale-150'></img>
                         </div>
                        <div>
                        <div className="bg-gray-800 text-white px-4 pt-2 flex flex-col w-80 rounded-t-2xl rounded-r-2xl relative">
                            <div className="inline pb-2">
                                <p className="text-start font-medium">I've recommended this app to all my friends and colleagues!  </p>
                            </div>
                            <div className="inline">
                                <p className="text-start text-gray-300 font-medium">
Karl, CTO of a cool startup</p>
                            </div>
                            
                        </div>
                        </div>
                      
                    </div>
                </div>
            </div>
           


        </div>
    

    </div>
  )
}

export default Features
