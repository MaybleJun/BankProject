import { InputHTMLAttributes } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn;
  type: "text" | "email" | "number" | "date";
  label?: string;
  labelClassName?: string;
  error?: FieldError;
  required?: boolean;
  isDirty?: boolean;
  placeholder?: string;
  validation?: Record<string, any>;
}
