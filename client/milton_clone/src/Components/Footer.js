export default function Footer(){
    return(
        <div class="bg-gray-200">
            <footer >
                <div class="flex flex-wrap items-center space-x-9"> 
                    
                        <div className="m-10 ">
                            <h3 className="text-black text-lg font-serif">Milton</h3>
                            <ul>
                            <li class="text-gray-400">A short text explaining why my startup is so cool</li>
                            <li class="text-gray-400">© My super start-up</li>
                        
                            </ul>
                        
                        </div>
                        <div className="m-10">
                            <h3 className="text-black text-lg font-serif">Products</h3>
                            <ul>
                            <li class="text-gray-400">Features</li>
                            <li class="text-gray-400">Testimonials</li>
                            <li class="text-gray-400">Pricing</li>
                            <li class="text-gray-400">FAQs</li>
                            </ul>
                        
                        </div>
                        <div  className="m-10">
                            <h4 className="text-black text-lg font-serif">Resources</h4>
                            <ul className="text-gray-400">
                                <li>Change log</li>
                                <li>Help center</li>
                                <li>Blog</li>
                                <li>Contact</li>
                                
                            </ul>
                        </div>
                
                        <div  className="m-10">
                            <h4 className="text-black text-lg font-serif">Others</h4>
                            <ul className="text-gray-400">
                                <li>Privacy</li>
                                <li>Terms</li>
                                <li>Affiliation</li>
                                <li>Press</li>
                                
                            </ul>
                        </div>
                        <div  className="m-10">
                            <h4 className="text-black text-lg font-serif">From the blog</h4>
                            <ul className="text-gray-400">
                                <li>Mastering Your Schedule: Top Time Management Techniques for Balancing Work and Life</li>
                                <li>Organizing Your Calendar for Enhanced Productivity and Focus</li>
                                <li>The Power of Prioritization: Effective Strategies for Managing Your Time and Tasks</li>
                                <li>Maximizing Your Minutes: Essential Tips for Streamlining Your Daily Routine and Calendar</li>

                            </ul>
                        </div>
                    
                    
                </div>
            </footer>
        </div>
    );
};