import Navbar from "./Navbar";
import cal from '../assets/cal.webp'
export default function Hero(){
    return(
        <div className="bg-orange-50 flex flex-col ">
            
                <div className="mx-24" > 
                    <div className="my-24">
                        <p className="bg-slate-200 inline px-3 py-1 rounded-3xl font-bold mb-5">An other way to manage time</p> 
                        <p className="font-bold text-slate-800 text-7xl">Your new favorite calendar 📆 app</p>
                        <br></br>
                        <p className="text-gray-500 font-sans  ">Here you should explain how cool your app is. Remember, focus on the benefits for your users, not on the features. </p>

                        <button className="bg-black text-orange-50 px-5 py-3 rounded-xl">Get started, it's free</button>
                        <p>Free 14 days trials,no credit card needed</p>
                    </div>
                
                </div>


                <div className='flex justify-center '>
                    <img  src={cal} className="rounded-2xl border-2"></img>
                </div>
        </div>

    );

};