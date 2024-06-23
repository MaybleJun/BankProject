// import imgBank from '../../assets/imgBank.png';
// import './CurrencyExchange.scss';

// type TCurrencyConverterListProps = {
//     params?: TGetExchangeRateParams[];
//     updateIntervalMinutes?: number;
//   };

// export default function CurrencyConverter({
//     params,
//     updateIntervalMinutes = 15,
//   }: TCurrencyConverterListProps) {
//     const currentDate = getCurrentDate();

// return (
//     <section className="currencyExchange">
//         <div className="currencyExchange__wrapperLeft">
//             <h2 className="currencyExchange__title">Exchange rate in internet bank</h2>

//             <h3 className="currencyExchange__subtitle">
//                 Currency
//             </h3>
//             <ul className="currencyExchange__list">
//                 <li>
//                     <span className="currencyExchange__itemForm">USD:</span>
//                     3.39
//                 </li>
//                 <li>
//                     <span className="currencyExchange__itemForm">EUR:</span>
//                     3.39
//                 </li>
//                 <li>
//                     <span className="currencyExchange__itemForm">GBP:</span>
//                     3.39
//                 </li>
//                 <li>
//                     <span className="currencyExchange__itemForm">GBP:</span>
//                     3.39
//                 </li>
//                 <li>
//                     <span className="currencyExchange__itemForm">GBP:</span>
//                     3.39
//                 </li>
//                 <li>
//                     <span className="currencyExchange__itemForm">GBP:</span>
//                     3.39
//                 </li>
//             </ul>
//             <a href="/" className="currencyExchange__link">All courses</a>
//         </div>

//         <div className="currencyExchange__wrapperRight">
//             <p className="currencyExchange__updateInfo">
//                 Update every {updateIntervalMinutes} minutes, {currentDate}
//             </p>
//             <img
//                 className="currencyExchange__img"
//                 src={imgBank}
//                 alt="Bank"
//             />
//         </div>
//     </section>
// );
//   }
