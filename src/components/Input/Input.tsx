import React from "react";
import CloseIcon from "../../assets/Close_round_fill.svg";
import CheckIcon from "../../assets/Check_fill.svg";
import "./Input.scss";
import { InputProps } from "./types";

export function Input({
  className: customClassName,
  register,
  id,
  error,
  required = false,
  isDirty,
  ...restProps
}: InputProps) {
  const hasError = error;
  const inputClasses = `Input__input${customClassName ? ` ${customClassName}` : ""}`;
  const containerClasses = `Input__container${hasError ? " Input__container--error" : ""}`;

  return (
    <div className="Input">
      <div>
        <div className={containerClasses}>
          <input
            className={inputClasses}
            id={id}
            required={required}
            aria-required={required}
            {...register}
            {...restProps}
          />
          {hasError ? <CloseIcon className="Input__icon" /> : isDirty ? <CheckIcon className="Input__icon" /> : null}
        </div>
        {hasError && <span className="Input__error">{error.message}</span>}
      </div>
    </div>
  );
}
