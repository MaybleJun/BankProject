import { SelectHTMLAttributes } from 'react';
import type { FieldError, UseFormRegisterReturn } from 'react-hook-form';

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  register: UseFormRegisterReturn;
  label?: string;
  labelClassName?: string;
  options: number[];
  optionsLabel?: string;
  error?: FieldError;
};
