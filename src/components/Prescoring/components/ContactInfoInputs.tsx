import type { UseFormRegister } from 'react-hook-form';
import { Input } from '../../Input/Input';
import { Select } from '../../../components/Select/Select';

import {
    NAME_REGEX,
    EMAIL_REGEX,
    PASSPORT_SERIES_REGEX,
    PASSPORT_NUMBER_REGEX,
    MIN_LOAN_AGE,
    LOAN_DURATION_OPTIONS,
    prescoringTexts,
    formTexts,
} from '../data-list-prescoringForm';

import { isAgeWithinRange } from '../../../utils/ageValidation';
import '../Prescoring.scss';

interface ContactInfoInputsProps {
  register: UseFormRegister<any>;
  errors: any;
  dirtyFields: any;
}

export function ContactInfoInputs({ register, errors, dirtyFields }: ContactInfoInputsProps) {
    const {
        lastName,
        firstName,
        middleName,
        email,
        birthdate,
        passportSeries,
        passportNumber,
    } = formTexts.inputs;

    return (
        <div className="PrescoringForm__container">
            <div className="PrescoringForm__inputs">
                <Input
                    register={register('lastName', {
                        required: formTexts.errors.lastName,
                        setValueAs: (value: string) => value.trim(),
                        pattern: {
                            value: NAME_REGEX,
                            message: formTexts.errors.lettersOnly,
                        },
                    })}
                    id="lastName"
                    type="text"
                    label={lastName}
                    placeholder={formTexts.placeholders.lastName}
                    required
                    error={errors.lastName}
                    isDirty={dirtyFields.lastName}
                />
                <Input
                    register={register('firstName', {
                        required: formTexts.errors.firstName,
                        setValueAs: (value: string) => value.trim(),
                        pattern: {
                            value: NAME_REGEX,
                            message: formTexts.errors.lettersOnly,
                        },
                    })}
                    id="firstName"
                    type="text"
                    label={firstName}
                    placeholder={formTexts.placeholders.firstName}
                    required
                    error={errors.firstName}
                    isDirty={dirtyFields.firstName}
                />
                <Input
                    register={register('middleName', {
                        required: false,
                        setValueAs: (value: string) => value?.trim(),
                        pattern: {
                            value: NAME_REGEX,
                            message: formTexts.errors.lettersOnly,
                        },
                    })}
                    id="middleName"
                    type="text"
                    label={middleName}
                    placeholder={formTexts.placeholders.middleName}
                    error={errors.middleName}
                    isDirty={dirtyFields.middleName}
                />

                <Select
                    register={register('term', {
                        valueAsNumber: true,
                    })}
                    id="term"
                    label="Term"
                    options={LOAN_DURATION_OPTIONS}
                    optionsLabel="months"
                    required
                />
                <Input
                    register={register('email', {
                        required: formTexts.errors.email,
                        pattern: {
                            value: EMAIL_REGEX,
                            message: formTexts.errors.invalidValue,
                        },
                    })}
                    id="email"
                    type="text"
                    label={email}
                    placeholder={formTexts.placeholders.email}
                    required
                    error={errors.email}
                    autoComplete="on"
                    isDirty={dirtyFields.email}
                />
                <Input
                    register={register('birthdate', {
                        required: formTexts.errors.birthdate,
                        validate: (value) => isAgeWithinRange(value, MIN_LOAN_AGE)
                        || formTexts.errors.minAge,
                    })}
                    id="birthdate"
                    type="date"
                    label={birthdate}
                    placeholder={formTexts.placeholders.birthdate}
                    required
                    error={errors.birthdate}
                    isDirty={dirtyFields.birthdate}
                />
                <Input
                    register={register('passportSeries', {
                        required: formTexts.errors.passportSeries,
                        pattern: {
                            value: PASSPORT_SERIES_REGEX,
                            message: formTexts.errors.invalidValue,
                        },
                    })}
                    id="passportSeries"
                    type="text"
                    label={passportSeries}
                    placeholder={formTexts.placeholders.passportSeries}
                    required
                    error={errors.passportSeries}
                    isDirty={dirtyFields.passportSeries}
                />
                <Input
                    register={register('passportNumber', {
                        required: formTexts.errors.passportNumber,
                        pattern: {
                            value: PASSPORT_NUMBER_REGEX,
                            message: formTexts.errors.invalidValue,
                        },
                    })}
                    id="passportNumber"
                    type="text"
                    label={passportNumber}
                    placeholder={formTexts.placeholders.passportNumber}
                    required
                    error={errors.passportNumber}
                    isDirty={dirtyFields.passportNumber}
                />
            </div>
            
        </div>
    );
}
