import { useRef, useMemo } from "react";
import { SubmitHandler } from "react-hook-form";
import { Button } from "../../components/Button/Button";
import { Divider } from "../../components/Divider/Divider";
import { AmountInput } from "./AmountInput";
import { usePrescoringForm } from "../../hooks/usePrescoringForm";
import { Loader } from "../Loader/Loader";
import { convertFormCurrency } from "../../utils/convertFormCurrency";
import {
  INITIAL_FORM_VALUES,
  MIN_LOAN_AMOUNT,
  MAX_LOAN_AMOUNT,
  prescoringTexts
} from "./data-list-prescoringForm";
import { PrescoringForm, PrescoringFormProps } from "./types";
import { ContactInfoInputs } from "./ContactInfoInputs";
import "./Prescoring.scss";

function PrescoringFormHeader() {
  return (
    <div className="PrescoringForm__header">
      <h2 className="PrescoringForm__title">{prescoringTexts.headingText}</h2>
      <p className="PrescoringForm__desc">{prescoringTexts.stepIndicator}</p>
    </div>
  );
}

function SelectedLoanAmount({ amount }: { amount: string }) {
  return (
    <section>
      <h3 className="PrescoringForm__subtitle PrescoringForm__subtitle">{prescoringTexts.chooseAmount}</h3>
      <p>{amount}</p>
      <Divider />
    </section>
  );
}

export function Prescoring({ loanFormRef, initialValues = INITIAL_FORM_VALUES }: PrescoringFormProps) {
  const submitButtonRef = useRef<HTMLButtonElement | null>(null);
  const { register, errors, handleSubmit, reset, watch, dirtyFields, isDirty, isSubmitting } = usePrescoringForm(initialValues);

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
                  message: prescoringTexts.amountRangeMessage,
                },
                max: {
                  value: MAX_LOAN_AMOUNT,
                  message: prescoringTexts.amountRangeMessage,
                },
              })}
              error={errors.amount}
            />
          </div>
          <SelectedLoanAmount amount={formattedAmount} />
        </section>
        <section className="Prescoring__info">
          <h3 className="Prescoring__heading Prescoring__heading--third">
            {prescoringTexts.contactDetails}
          </h3>
          <div className="Prescoring__container">
            <ContactInfoInputs register={register} errors={errors} dirtyFields={dirtyFields} />
          </div>
        </section>
        <Button
          disabled={!isDirty || isSubmitting}
          className="Button Prescoring__button"
          type="submit"
          btnRef={submitButtonRef}
        >
          {isSubmitting ? (
            <Loader className="Prescoring__loader" />
          ) : (
            "Continue"
          )}
        </Button>
      </form>
    </section>
  );
}
