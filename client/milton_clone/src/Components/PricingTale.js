
// import React, { useState } from 'react';
// import './PricingTable.css';

// const PricingTable = () => {
//   const [isMonthly, setIsMonthly] = useState(true);

//   const plans = [
//     {
//       id: 1,
//       name: 'Free',
//       priceMonthly: 0,
//       priceYearly: 0,
//       features: ['A cool feature', 'A basic feature', 'A top feature with limitations', 'An incredible feature so useful', 'A top feature', 'Best deal 🔥'],
//     },
//     {
//       id: 2,
//       name: 'Starter',
//       priceMonthly: 15,
//       priceYearly: 180,
//       features: ['All Free features, plus', 'A cool feature', 'A basic feature', 'A top feature with limitations', 'An incredible feature so useful', 'A cool feature'],
//     },
//     {
//       id: 3,
//       name: 'Pro',
//       priceMonthly: 45,
//       priceYearly: 540,
//       features: ['All Starter features, plus', 'A cool feature', 'A basic feature', 'A top feature with limitations', 'An incredible feature so useful', 'A premium feature', 'You need this feature'],
//     },
//   ];

//   const togglePlan = () => {
//     setIsMonthly(!isMonthly);
//   };

//   return (
//     <div className="pricing-table">
//       <h1>Find the best plan for your needs</h1>
//       <div className="toggle-container">
//         <span>Monthly</span>
//         <label className="switch">
//           <input type="checkbox" onChange={togglePlan} checked={isMonthly} />
//           <span className="slider round"></span>
//         </label>
//         <span>Annually</span>
//         {isMonthly && <span>✨ save 30%</span>}
//       </div>
//       <div className="plans-container">
//         {plans.map((plan) => (
//           <div key={plan.id} className="plan">
//             <h2>{plan.name}</h2>
//             <div className="price">
//               <span className="currency">$</span>
//               <span className="amount">{isMonthly ? plan.priceMonthly : plan.priceYearly}</span>
//               <span className="period">{isMonthly ? '/mo' : '/yr'}</span>
//             </div>
//             {plan.priceYearly > 0 && (
//               <p className="billed-yearly">
//                 Billed ${plan.priceYearly} yearly
//               </p>
//             )}
//             <p className="description">So you can see how incredible our tool is.</p>
//             <button>Get started</button>
//             {plan.features && (
//               <div className="features">
//                 <p>What's included:</p>
//                 <ul>
//                   {plan.features.map((feature, index) => (
//                     <li key={index}>{feature}</li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PricingTable;