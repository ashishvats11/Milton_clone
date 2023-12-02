export default function Navbar(){
    return(
        <div class="flex justify-around bg-orange-50 h-10 border-b-2 border-slate-200 px-14 py-10 fixed w-full">
            <div className=" flex items-center "> 
                <ul className="text-black text-xl font-sans font-semibold ">Milton</ul>
            </div>
            <div class="flex justify-center" >
                <ul class="flex items-center mx-9 ">
                    <li class="text-slate-500 text-lg font-semibold cursor-pointer hover:underline hover:decoration-black  px-4">Features </li>
                    <li class="text-slate-500 text-lg font-semibold cursor-pointer hover:underline hover:decoration-black  px-4"> Testimonial</li>
                    <li class="text-slate-500 text-lg font-semibold cursor-pointer hover:underline hover:decoration-black  px-4">Pricing</li>
                    <li class="text-slate-500 text-lg font-semibold cursor-pointer hover:underline hover:decoration-black  px-4">FAQs</li>
                    <li class="text-slate-500 text-lg font-semibold cursor-pointer hover:underline hover:decoration-black  px-4">Blog</li>
                </ul>
            </div>
            <div class="flex justify-center " >
                <ul class="flex items-center mx-9 ">
           
                    <button className="bg-slate-200 text-lg rounded-xl px-3.5 py-1.5 font-medium mx-2.5  transform hover:scale-110 transition ease-out duration-500">Log in</button>
                    <button className="bg-gray-800  text-lg text-orange-50 font-medium rounded-xl px-4 py-1.5 transform hover:scale-110 transition ease-out duration-500">GetStarted</button>
           
                </ul>
             </div>
        
     
         </div>
    );
}