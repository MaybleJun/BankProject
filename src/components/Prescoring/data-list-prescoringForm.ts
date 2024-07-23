export const LOAN_DURATION_OPTIONS = [6, 12, 18, 24];
export const MIN_LOAN_AMOUNT = 15000;
export const MAX_LOAN_AMOUNT = 600000;
export const MIN_LOAN_AGE = 18;

export const NAME_REGEX = /^[a-zA-Zа-яА-Я ]*$/;
export const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
export const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;
export const PASSPORT_SERIES_REGEX = /^[0-9]{4}$/;
export const PASSPORT_NUMBER_REGEX = /^[0-9]{6}$/;

export const INITIAL_FORM_VALUES = {
    amount: 150000,
    term: 6,
    lastName: '',
    firstName: '',
    middleName: '',
    email: '',
    birthdate: '',
    passportSeries: '',
    passportNumber: '',
};

export const prescoringTexts = {
    headingText: 'Customize your card',
    stepIndicator: 'Step 1 of 5',
    chooseAmount: 'Select amount',
    amountRangeMessage: `Must be between ${MIN_LOAN_AMOUNT} and ${MAX_LOAN_AMOUNT}`,
    chosenAmount: 'You have chosen the amount',
    contactDetails: 'Contact information',
    termDuration: 'months',
};

export const formTexts = {
    button: {
        continue: 'Continue',
        select: 'Select',
    },
    inputs: {
        lastName: 'Your last name',
        firstName: 'Your first name',
        middleName: 'Your patronymic',
        term: 'Select term',
        email: 'Your email',
        birthdate: 'Your date of birth',
        passportSeries: 'Your passport series',
        passportNumber: 'Your passport number',
    },
    placeholders: {
        lastName: 'For Example, Doe',
        firstName: 'For Example, John',
        middleName: 'For Example, Ivanovich',
        email: 'test@gmail.com',
        birthdate: 'Select Date and Time',
        passportSeries: '0000',
        passportNumber: '000000',
    },
    errors: {
        lastName: 'Enter your last name',
        firstName: 'Enter your first name',
        email: 'Incorrect email address',
        birthdate: 'Incorrect date of birth',
        minAge: 'You must be at least 18 years old',
        passportSeries: 'The series must be 4 digits',
        passportNumber: 'The number must be 6 digits',
        requiredField: 'Required field',
        lettersOnly: 'Please use only letters',
        invalidValue: 'Invalid value',
    },
};
