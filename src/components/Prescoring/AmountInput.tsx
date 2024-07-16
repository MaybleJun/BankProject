import { Input } from "../../components/Input/Input";
import type { UseFormRegisterReturn } from "react-hook-form";
import "./Prescoring.scss";

interface AmountInputProps {
  register: UseFormRegisterReturn;
  error: any;
}

export function AmountInput({ register, error }: AmountInputProps) {
  return (
    <div className="PrescoringForm__amountWrapper">
         <h3 className="PrescoringForm__desc">Select amount</h3>
      <Input
        label="Select Amount"
        register={register}
        id="amount"
        type="number"
        error={error}
      />
    </div>
  );
}