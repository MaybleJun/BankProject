import React from 'react';

export interface PrescoringForm {
    amount: number;
    term: number;
    firstName: string;
    lastName: string;
    middleName: string | null;
    email: string;
    birthdate: string | Date;
    passportSeries: string;
    passportNumber: string;
  }

export interface PrescoringFormProps {
    loanFormRef?: React.RefObject<HTMLElement>;
    initialValues?: PrescoringForm;
  }
