
    import logo from '../assets/bitmoji/logo.jpg';

    export default function Footer() {
    return (
        <div className="bg-gray-200">
        <footer>
            <div className="flex flex-wrap justify-around mx-36 space-x-4 pb-4">
            {/* Logo and Startup Info */}
                <div className="m-10 flex-shrink-0 w-56">
                    <div className="flex justify-start items-center">
                    <img src={logo} className="w-6 h-6 m-1 bg-gray-400 p-1 rounded-md text-start" alt="Logo"></img>
                    <p className="text-black text-xl font-semibold text-start mb-4">Milton</p>
                    </div>
                    <div className="">
                    <ul className="text-gray-400 text-start space-y-2">
                        <li className="text-gray-500 line-clamp-2">A short text explaining why my startup is so cool</li>
                        <li className="text-gray-500">© My super start-up</li>
                    </ul>
                    </div>
                    <div className="flex flex-row gap-1 justify-start space-x-2 mt-2">
                    <div>
                        <img src={"https://framerusercontent.com/images/vbouc63110hrN4mpMDBbBqxbgY.svg"} alt="Icon"></img>
                    </div>
                    <div>
                        <img src={"https://framerusercontent.com/images/A9DrwvI3tDOPLUSsJGHlIqt9SkI.svg"} alt="Icon"></img>
                    </div>
                    <div>
                        <img src={"https://framerusercontent.com/images/YSSiRnfV1Ebaxm94FWkCKCkc.svg"} alt="Icon"></img>
                    </div>
                    </div>
                </div>

                {/* Products */}
                <div className="m-10 flex-shrink-0 w-36">
                    <p className="text-black text-xl font-semibold text-start mb-4">Products</p>
                    <ul className="text-gray-500 text-start space-y-2 ">
                    <li className='hover:underline hover:decoration-black'>Features</li>
                    <li className='hover:underline hover:decoration-black'>Testimonials</li>
                    <li className='hover:underline hover:decoration-black'>Pricing</li>
                    <li className='hover:underline hover:decoration-black'>FAQs</li>
                    </ul>
                </div>

                {/* Resources */}
                <div className="m-10 flex-shrink-0 w-36">
                    <p className="text-black text-xl font-semibold text-start mb-4">Resources</p>
                    <ul className="text-gray-500 text-start space-y-2">
                    <li className='hover:underline hover:decoration-black'>Change log</li>
                    <li className='hover:underline hover:decoration-black'>Help center</li>
                    <li className='hover:underline hover:decoration-black'>Blog</li>
                    <li className='hover:underline hover:decoration-black'>Contact</li>
                    </ul>
                </div>

                {/* Others */}
                <div className="m-10 flex-shrink-0 w-28">
                    <p className="text-black text-xl font-semibold text-start mb-4">Others</p>
                    <ul className="text-gray-500 text-start space-y-2">
                    <li className='hover:underline hover:decoration-black'>Privacy</li>
                    <li className='hover:underline hover:decoration-black'>Terms</li>
                    <li className='hover:underline hover:decoration-black'>Affiliation</li>
                    <li className='hover:underline hover:decoration-black'>Press</li>
                    </ul>
                </div>

                {/* From the Blog */}
                <div className="m-10 flex-shrink-0 w-64">
                    <p className="text-black text-xl font-semibold text-start mb-4">From the blog</p>
                    <ul className="text-gray-500 text-start ">
                    <li className="mt-2 hover:underline hover:decoration-black">Mastering Your Schedule: Top Time Management Techniques for Balancing Work and Life</li>
                    <li className="mt-2 hover:underline hover:decoration-black">Organizing Your Calendar for Enhanced Productivity and Focus</li>
                    <li className="mt-2 hover:underline hover:decoration-black">The Power of Prioritization: Effective Strategies for Managing Your Time and Tasks</li>
                    <li className="mt-2 hover:underline hover:decoration-black">Maximizing Your Minutes: Essential Tips for Streamlining Your Daily Routine and Calendar</li>
                    </ul>
                </div>
            </div>
        </footer>
        </div>
    );
    }
