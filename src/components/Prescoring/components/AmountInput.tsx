import { UseFormRegisterReturn } from 'react-hook-form';
import '../Prescoring.scss';
import { MIN_LOAN_AMOUNT, MAX_LOAN_AMOUNT } from '../data-list-prescoringForm';
import { useEffect } from 'react';

interface AmountInputProps {
  register: UseFormRegisterReturn;
  error: any;
  amount: number;
}

export function AmountInput({ register, error, amount }: AmountInputProps) {
    const updateSliderBackground = (value: number) => {
        const percentage = ((value - MIN_LOAN_AMOUNT) / (MAX_LOAN_AMOUNT - MIN_LOAN_AMOUNT)) * 100;
        document.documentElement.style.setProperty('--slider-value', `${percentage}%`);
    };

    useEffect(() => {
        updateSliderBackground(amount);
    }, [amount]);

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
                onInput={(e) => updateSliderBackground(Number(e.currentTarget.value))}
            />
            <div className="PrescoringForm__rangeValues">
                <span>{MIN_LOAN_AMOUNT}</span>
                <span>{MAX_LOAN_AMOUNT}</span>
            </div>

            <div className="PrescoringForm__error">
                {error && <p>{error.message}</p>}
            </div>
        </div>
    );
}
