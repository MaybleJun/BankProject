import { useRef, useMemo } from "react";
import { SubmitHandler } from "react-hook-form";
import { Button } from "../../components/Button/Button";
import { Divider } from "../../components/Divider/Divider";
import { AmountInput } from "./AmountInput";
import { usePrescoringForm } from "../../hooks/usePrescoringForm";
import { convertFormCurrency } from "../../utils/convertFormCurrency";
import {
  INITIAL_FORM_VALUES,
  MIN_LOAN_AMOUNT,
  MAX_LOAN_AMOUNT,
} from "./data-list-prescoringForm";
import  {PrescoringForm, PrescoringFormProps } from "./types";
import "./Prescoring.scss";


function PrescoringFormHeader() {
  return (
    <div className="PrescoringForm__header">
      <h2 className="PrescoringForm__title">Customize your card</h2>
      
      <p className="PrescoringForm__desc">Step 1 of 5</p>
    </div>
  );
}


function SelectedLoanAmount({ amount }: { amount: string }) {
  return (
    <section >
      <h3 className="PrescoringForm__subtitle PrescoringForm__subtitle">You have chosen the amount</h3>
      <p>{amount}</p>
      <Divider />
    </section>
  );
}

export function Prescoring({ loanFormRef, initialValues = INITIAL_FORM_VALUES }:PrescoringFormProps) {
  const submitButtonRef = useRef<HTMLButtonElement | null>(null);
  const { register, errors, handleSubmit, reset, watch } = usePrescoringForm(initialValues);

  const watchedAmount = watch("amount");
  const formattedAmount = useMemo(() => convertFormCurrency(watchedAmount), [watchedAmount]);

  const onFormSubmit: SubmitHandler<PrescoringForm> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <section className="PrescoringForm contentCard" ref={loanFormRef}>
      <form onSubmit={handleSubmit(onFormSubmit)} noValidate>
        <section className="PrescoringForm__amount">
          <div className="PrescoringForm__select">
            <PrescoringFormHeader />
           
            <AmountInput 
              register={register("amount", {
                required: "This field is required",
                valueAsNumber: true,
                min: {
                  value: MIN_LOAN_AMOUNT,
                  message: `Amount should be between ${MIN_LOAN_AMOUNT} and ${MAX_LOAN_AMOUNT}`,
                },
                max: {
                  value: MAX_LOAN_AMOUNT,
                  message: `Amount should be between ${MIN_LOAN_AMOUNT} and ${MAX_LOAN_AMOUNT}`,
                },
              })} 
              error={errors.amount} 
            />
          </div>
          <SelectedLoanAmount amount={formattedAmount} />
        </section>
      </form>
    </section>
  );
}
