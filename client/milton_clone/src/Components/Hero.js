import Navbar from "./Navbar";
import cal from '../assets/cal.webp'
export default function Hero(){
    return(
        <div className="bg-orange-50 flex flex-col pt-20 ">
            
                <div className="mx-24" > 
                    <div className="my-24">
                        <p className="bg-slate-200 inline px-4 py-1 rounded-3xl font-medium mb-5 align-middle justify-center">An other way to manage time</p> 
                        <p className="font-bold text-slate-800 text-7xl md:px-56">Your new favorite calendar 📆 app</p>
                        
                        <p className="text-gray-500 text-lg font-sans pt-6 line-clamp-2">Here you should explain how cool your app is. Remember, focus on the benefits for your users, not on the features. </p>

                        <button className="bg-black text-orange-50 px-6 py-3 rounded-xl mt-7 transform hover:scale-110 transition ease-out duration-500 mb-1">Get started, it's free</button>
                        <p className="font-light text-xs">Free 14 days trials,no credit card needed</p>
                    </div>
                
                </div>


                <div className='flex justify-center '>
                    <img  src={cal} className="rounded-2xl border-2"></img>
                </div>
        </div>

    );

};