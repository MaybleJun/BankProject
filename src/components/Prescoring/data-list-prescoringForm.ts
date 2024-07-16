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
  lastName: "",
  firstName: "",
  middleName: "",
  email: "",
  birthdate: "",
  passportSeries: "",
  passportNumber: "",
};