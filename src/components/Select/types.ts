import { SelectHTMLAttributes } from 'react';
import type { FieldError, UseFormRegisterReturn } from 'react-hook-form';

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  register: UseFormRegisterReturn;
  label?: string;
  type?: "date" | "any";
  required?: boolean;
  labelClassName?: string;
  options: number[] | string[];
  optionsLabel?: string;
  validation?: Record<string, any>;
  error?: FieldError;
  isDirty?: boolean;
};
