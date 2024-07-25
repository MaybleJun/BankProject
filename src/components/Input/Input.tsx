import React from 'react';
import { Label } from '../../components/Label/Label';
import CloseIcon from '../../assets/Close_round_fill.svg';
import CheckIcon from '../../assets/Check_fill.svg';
import './Input.scss';
import { InputProps } from './types';

export function Input({
    className: customClassName,
    register,
    id,
    error,
    required = false,
    isDirty,
    label,
    labelClassName,
    ...restProps
}: InputProps) {
    const inputClasses = `Input__input${customClassName ? ` ${customClassName}` : ''}`;
    const fieldContainerClasses = `Input__container${error ? ' Input__container--error' : ''}`;

    return (
        <div className="Input">
            {label && (
                <Label className={labelClassName} htmlFor={id} required={required}>
                    {label}
                </Label>
            )}
            <div className={fieldContainerClasses}>
                <input
                    className={inputClasses}
                    id={id}
                    required={required}
                    aria-required={required}
                    {...register}
                    {...restProps}
                />
                {error ? (
                    <CloseIcon
                        className="Input__icon"
                        width={20}
                        height={20}
                    />
                ) : isDirty ? (
                    <CheckIcon
                        className="Input__icon"
                        width={20}
                        height={20}
                    />
                ) : null}
            </div>
            {error && <span className="Input__error">{error.message}</span>}
        </div>
    );
}
