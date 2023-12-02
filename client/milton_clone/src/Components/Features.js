import React from 'react'
import f1 from '../assets/features/f1.webp'
import f2 from '../assets/features/f2.webp'
import f3 from '../assets/features/f3.webp'
import f4 from '../assets/features/f4.webp'
function Features() {
  return (
    <div className='bg-orange-50 pt-48 px-20 flex flex-col gap-20'>
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
                <div className='flex flex-col gap-1'>
                    <div className='flex justify-start'>
                        <p className='bg-orange-300 inline rounded-2xl px-3 py-1'>Seamless Scheduling</p>
                    </div>
                    <div>
                        <p className='text-4xl font-semibold text-start'>Focus on what matters most for you</p>
                    </div>

                </div>
                <div>
                    <p className='text-start'>Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks.</p>
                </div>
            </div>
            <div>
                <img src={f1}></img>
            </div>


        </div>

        {/*Feature 2*/}

        <div className='flex flex-row gap-7 px-14 '>
            <div className='scale-150'>
                <img src={f2}></img>
            </div>
            <div className='felx flex-col '>
                <div className='flex flex-col gap-1'>
                    <div className='flex justify-start'>
                        <p className='bg-orange-300 inline rounded-2xl px-3 py-1'>Smart Reminders & Task</p>
                    </div>
                    <div>
                        <p className='text-4xl font-semibold text-start'>Never miss an important deadline or event again</p>
                    </div>

                </div>
                <div>
                    <p className='text-start'>Never miss an important deadline again with our AI-driven  notifications. Our app intelligently analyzes your schedule to prioritize what's most important, keeping you on track and ensuring your day is productive and stress-free.</p>
                </div>
            </div>
           


        </div>

        {/*Feature 3*/}

        <div className='flex '>
            <div className='felx flex-col '>
                <div className='flex flex-col gap-1'>
                    <div className='flex justify-start'>
                        <p className='bg-orange-300 inline rounded-2xl px-3 py-1'>Seamless Scheduling</p>
                    </div>
                    <div>
                        <p className='text-4xl font-semibold text-start'>Focus on what matters most for you</p>
                    </div>

                </div>
                <div>
                    <p className='text-start'>Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks.</p>
                </div>
            </div>
            <div>
                <img src={f3}></img>
            </div>


        </div>

        {/*Feature 4*/}

        <div className='flex '>
        <div>
                <img src={f4}></img>
            </div>
            <div className='felx flex-col '>
                <div className='flex flex-col gap-1'>
                    <div className='flex justify-start'>
                        <p className='bg-orange-300 inline rounded-2xl px-3 py-1'>Seamless Scheduling</p>
                    </div>
                    <div>
                        <p className='text-4xl font-semibold text-start'>Focus on what matters most for you</p>
                    </div>

                </div>
                <div>
                    <p className='text-start'>Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks.</p>
                </div>
            </div>
           


        </div>
    

    </div>
  )
}

export default Features
