
        import React, { useState } from 'react';
       

        const PricingTable = () => {
        const [isMonthly, setIsMonthly] = useState(true);

        const plans = [

        {
            id: 1,
            name: 'Free',
            priceMonthly: 0,
            priceYearly: 0,
            features: ['A cool feature', 'A basic feature', 'A top feature with limitations', 'An incredible feature so useful', 'A top feature', 'Best deal 🔥'],
            },
            {
            id: 2,
            name: 'Starter',
            priceMonthly: 15,
            priceYearly: 180,
            features: ['All Free features, plus', 'A cool feature', 'A basic feature', 'A top feature with limitations', 'An incredible feature so useful', 'A cool feature'],
            },
            {
            id: 3,
            name: 'Pro',
            priceMonthly: 45,
            priceYearly: 540,
            features: ['All Starter features, plus', 'A cool feature', 'A basic feature', 'A top feature with limitations', 'An incredible feature so useful', 'A premium feature', 'You need this feature'],
            },
        ];

        const togglePlan = () => {
        setIsMonthly(!isMonthly);
        };

        return (
        <div className="bg-orange-50 pt-40">
            <div className='flex flex-col gap-3 pb-6'>
                <div>
                    <p className='bg-gray-200 inline px-4 py-1 rounded-2xl font-medium'>Pricing and plans 💰</p>
                </div>
                <div>
                    <p className='text-6xl font-bold'>Find the best plan for your needs</p>
                </div>
            </div>
            <div className="flex items-center justify-center mb-8 text-lg">
                <span className='px-2'>Monthly</span>
                <label className="switch">
                    <input type="checkbox" onChange={togglePlan} checked={isMonthly} className="hidden" />
                    <span className="slider round"></span>
                </label>
                <span className='px-2'>Annually</span>
                {isMonthly && <span className="ml-2"></span>}
                <span>✨ save 30%</span>
            </div>

                <div className="flex flex-row flex-wrap  rounded-2xl align-baseline justify-evenly px-32 ">
                    {plans.map((plan) => (
                    <div key={plan.id} className=" w-96 p-4 border border-gray-300 rounded-2xl bg-white shadow-xl">
                        <p className='bg-gray-200 inline px-4 py-1 rounded-2xl'>{plan.name}</p>
                        <div className="price flex items-center mt-4">
                            
                            <span className="amount text-7xl font-bold">${isMonthly ? plan.priceMonthly : plan.priceYearly}</span>
                            <span className="period ml-1">{isMonthly ? '/yr' : '/mo'}</span>
                        </div>
                        {plan.priceYearly > 0 && (
                            <p className="billed-yearly mt-2">
                                Billed ${plan.priceYearly} yearly
                            </p>
                            )}
                            <p className="description mt-4 text-gray-600">So you can see how incredible our tool is.</p>
                            <button className="bg-gray-800  text-lg text-orange-50 font-medium rounded-xl px-4 m-1 py-1.5 transform hover:scale-110 transition ease-out duration-500">Get started</button>
                            {plan.features && (
                           <div className="features mt-4">
                           <p className="text-start font-medium">What's included:</p>
                           <ul className="list-none pl-1">
                             {plan.features.map((feature, index) => (
                               <li
                                 key={index}
                                 className="text-start mt-1 flex items-center text-gray-500"
                               >
                                 <span className="mr-2 text-pink-500 ">&#10003;</span>
                                 {feature}
                               </li>
                             ))}
                           </ul>
                         </div>
                         
                            )}
                    </div>
                    ))}
                </div>
        </div>
        );
        };

        export default PricingTable;

