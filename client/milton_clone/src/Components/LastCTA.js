import bit1 from '../assets/bitmoji/bit1.webp'
export default function LastCTA(){
    return(
        <div className="bg-orange-50 pb-28 px-20 ">
            <div className="pt-40 pb-10">
                <p className="bg-gray-200 inline font-medium rounded-2xl px-3 py-1  ">Last call Baby!🚀</p>
                <p className="text-5xl font-bold mt-4 ">Ready to start?</p>
            </div>
            <div>
                <p className="pb-3 lg:text-lg px-96 text-gray-500 mb-4"> Here is your last chance to explain how cool your app is. Focus on the benefits for your users, not on the features. </p>
                <button className="bg-black text-orange-50 px-5 py-3 mb-6 rounded-xl transform hover:scale-110 transition ease-out duration-300">Get started, it's free</button>
                
                {/* Sticker*/}
                <div className='relative flex justify-center items-center flex-row'>
                    <div className="relative flex flex-row justify-start">
                       <div className="  mt-20">
                            <img src={bit1} className='w-12 scale-150'></img>
                         </div>
                        <div>
                        <div className="bg-orange-200 px-4 pt-2 flex flex-col w-80 rounded-t-2xl rounded-r-2xl relative">
                            <div className="inline pb-2">
                                <p className="text-start">I never missed a call again, the AI-driven feature is a game changer for me! </p>
                            </div>
                            <div className="inline">
                                <p className="text-start text-gray-500 font-medium">Adam, Solo Founder</p>
                            </div>
                            
                        </div>
                        </div>
                      
                    </div>
                </div>


            </div>
        
        </div>
    )
}