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
    required = false,
    error,
    ...props
}: SelectProps) {
    const optionsList = options.filter(option => option !== null).map((option) => {
        if (typeof option === "object") {
            const opt = option as { value: string | number; label: string };
            return (
                <option key={opt.value} value={opt.value}>
                    {opt.label}
                </option>
            );
        }

        return (
            <option key={option} value={option}>
                {`${option} ${optionsLabel ? optionsLabel : ""}`}
            </option>
        );
    });

    return (
        <div className="Select">
            {label && (
                <Label className={labelClassName} htmlFor={id} required={required}>
                    {label}
                </Label>
            )}
            <div>
                <div className={`Select__fieldContainer${error ? " Select__fieldContainer--error" : ""}`}>
                    <select className="Select__field" id={id} required={required} {...register} {...props}>
                        {optionsList}
                    </select>
                </div>
                {error && <span className="Select__error">{error.message}</span>}
            </div>
        </div>
    );
}
