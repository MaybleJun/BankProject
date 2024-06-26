import React, { ButtonHTMLAttributes, FC } from 'react';
import './Button.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

export const Button: FC<ButtonProps> = ({ className = 'Button', children, ...otherProps }) => (
    <button
        type="button"
        className={`Button ${className}`}
        {...otherProps}
    >
        {children}
    </button>
);
