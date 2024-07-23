import React from 'react';
import { Label } from '../../components/Label/Label';
import './Select.scss';
import { SelectProps } from './types';

export function Select({
    register,
    id,
    label,
    labelClassName,
    options,
    optionsLabel,
    required,
    error,
    ...props
}: SelectProps) {
    return (
        <div className="Select">
            {label && (
                <Label className={labelClassName} htmlFor={id} required={required}>
                    {label}
                </Label>
            )}
            <div className="Select__container">
                <select className="Select__field" id={id} {...register} {...props}>
                    {options.map((value) => (
                        <option key={value} value={value}>
                            {`${value} ${optionsLabel}`}
                        </option>
                    ))}
                </select>
                {error && <span className="Select__error">{error.message}</span>}
            </div>
        </div>
    );
}
