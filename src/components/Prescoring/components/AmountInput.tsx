import { UseFormRegisterReturn } from "react-hook-form";
import "../Prescoring.scss";
import { MIN_LOAN_AMOUNT, MAX_LOAN_AMOUNT } from "../data-list-prescoringForm";

interface AmountInputProps {
  register: UseFormRegisterReturn;
  error: any;
  amount: number; // Add this prop
}

export function AmountInput({ register, error, amount }: AmountInputProps) {
  return (
    <div className="PrescoringForm__amountWrapper">
      <label htmlFor="amount" className="PrescoringForm__amountLabel">Select Amount</label>
      <div className="PrescoringForm__amountDisplay">
        {amount} 
      </div>
      <input
        {...register}
        id="amount"
        type="range"
        className="PrescoringForm__slider"
        min={MIN_LOAN_AMOUNT}
        max={MAX_LOAN_AMOUNT}
        step="1000"
      />
      
      <div className="PrescoringForm__error">
        {error && <p>{error.message}</p>}
      </div>
    </div>
  );
}
