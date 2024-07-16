import { InputHTMLAttributes } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn;
  label?: string;
  labelClassName?: string;
  error?: FieldError;
  isDirty?: boolean;
}