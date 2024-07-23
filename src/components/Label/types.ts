import React from 'react';

export interface LabelProps {
    children: React.ReactNode;
    className?: string;
    htmlFor?: string;
    required?: boolean;
}
