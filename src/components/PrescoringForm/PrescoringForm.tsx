import { useRef, useMemo, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from "../../hooks/useTypeReduxStore";
import { Button } from '../Button/Button';
import { Divider } from '../Divider/Divider';
import { AmountInput } from './components/AmountInput';
import { usePrescoringForm } from '../../hooks/usePrescoringForm';
import { Loader } from '../Loader/Loader';
import { convertFormCurrency } from '../../utils/convertFormCurrency';
import {
    INITIAL_FORM_VALUES,
    MIN_LOAN_AMOUNT,
    MAX_LOAN_AMOUNT,
    prescoringTexts,
} from './data-list-prescoringForm';
import { IPrescoringForm, PrescoringFormProps } from '../../models/PrescoringForm';
import { ContactInfoInputs } from './components/ContactInfoInputs';
import './PrescoringForm.scss';
import { submitPrescoringForm } from '../../store/slice/loanSlice';

function PrescoringFormHeader() {
    return (
        <div className="PrescoringForm__header">
            <h2 className="PrescoringForm__title">{prescoringTexts.headingText}</h2>
            <p className="PrescoringForm__desc">{prescoringTexts.stepIndicator}</p>
        </div>
    );
}

function SelectedLoanAmount({ amount }: { amount: string }) {
    return (
        <section>
            <h3 className="PrescoringForm__subtitle">{prescoringTexts.chooseAmount}</h3>
            <p>{amount}</p>
            <Divider />
        </section>
    );
}

export function PrescoringForm({
    loanFormRef,
    initialValues = INITIAL_FORM_VALUES,
}: PrescoringFormProps) {
    const [isLoading, setIsLoading] = useState(false);
    const submitButtonRef = useRef<HTMLButtonElement | null>(null);
    const dispatch = useAppDispatch();
    const {
        register, errors, handleSubmit, reset, watch, dirtyFields, isDirty, isSubmitting, trigger
    } = usePrescoringForm(initialValues);

    const watchedAmount = watch('amount');
    const formattedAmount = useMemo(() => convertFormCurrency(watchedAmount), [watchedAmount]);

    const onFormSubmit: SubmitHandler<IPrescoringForm> = async (data) => {
        // Триггерим валидацию
        const isValid = await trigger();
        if (!isValid) return; // Останавливаем отправку, если валидация не пройдена

        setIsLoading(true);
        try {
            await dispatch(submitPrescoringForm(data)); // Обрабатываем экшен без unwrap
            console.log('Form submitted successfully');
            reset();
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="PrescoringForm contentCard" ref={loanFormRef}>
            <form onSubmit={handleSubmit(onFormSubmit)} noValidate>
                <section className="PrescoringForm__amount">
                    <div className="PrescoringForm__select">
                        <PrescoringFormHeader />
                        <AmountInput
                            register={register('amount', {
                                required: 'This field is required',
                                valueAsNumber: true,
                                min: {
                                    value: MIN_LOAN_AMOUNT,
                                    message: prescoringTexts.amountRangeMessage,
                                },
                                max: {
                                    value: MAX_LOAN_AMOUNT,
                                    message: prescoringTexts.amountRangeMessage,
                                },
                            })}
                            error={errors.amount}
                            amount={watchedAmount}
                        />
                    </div>
                    <SelectedLoanAmount amount={formattedAmount} />
                </section>
                <section className="PrescoringForm__info">
                    <h3 className="PrescoringForm__heading PrescoringForm__heading--third">
                        {prescoringTexts.contactDetails}
                    </h3>
                    <div className="PrescoringForm__container">
                        <ContactInfoInputs
                            register={register}
                            errors={errors}
                            dirtyFields={dirtyFields}
                        />
                        <Button
                            className="Button PrescoringForm__button"
                            type="submit"
                            btnRef={submitButtonRef}
                        >
                            {isLoading ? <Loader className="PrescoringForm__loader" /> : 'Continue'}
                        </Button>
                    </div>
                </section>
            </form>
        </section>
    );
}
