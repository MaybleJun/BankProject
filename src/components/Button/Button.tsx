import React, { FC } from 'react';
import './Button.scss';
import { ButtonProps } from './types';

export const Button: FC<ButtonProps> = ({ className = 'Button', children, ...otherProps }) => (
    <button
        type="button"
        className={`Button ${className}`}
        {...otherProps}
    >
        {children}
    </button>
);
