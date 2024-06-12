import React, { ButtonHTMLAttributes, FC } from 'react';
import './Button.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

export const Button: FC<ButtonProps> = ({ className = 'Button', children, ...otherProps }) => {
    return (
        <button
            type="button"
            className={`button ${className}`}
            {...otherProps}
        >
            Online Bank
            {children}
        </button>
    );
};
