import { SubmitHandler, useForm } from 'react-hook-form';
import { sendNewsletterEmail } from './api/api';
import { Button } from '../../components/Button/Button';
import { Label } from '../../components/Label/Label';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import IconEmail from '../../assets/iconEmail.svg';
import IconTelegram from '../../assets/iconTelegram.svg';

import './SupportEmailForm.scss';
import type { SupportEmailFormProps } from './types';
import { EMAIL_PATTERN, newsletterText } from './data-list';

export function SupportEmailForm() {
    const [subscribedEmails, updateSubscribedEmails] = useLocalStorage<SupportEmailFormProps['email'][]>('newsletterSubscription', []);

    const {
        register,
        formState: { errors },
        handleSubmit,
        setValue,
    } = useForm<SupportEmailFormProps>();

    const onSubmit: SubmitHandler<SupportEmailFormProps> = async function (formData) {
        try {
            const apiResponse = await sendNewsletterEmail(formData);

            if (apiResponse?.status === 200) {
                updateSubscribedEmails((emailList) => [...emailList, formData.email]);
                setValue('email', newsletterText.alreadySubscribed);
            } else {
                console.error(`Request failed with status ${apiResponse?.status}: ${apiResponse?.statusText}`);
            }
        } catch (postError) {
            console.error(`Error occurred while posting email: ${postError}`);
        }
    };

    return (
        <form className="SupportEmailForm" onSubmit={handleSubmit(onSubmit)}>
            <Label className="SupportEmailForm__label">
                <IconEmail
                    className="SupportEmailForm__IconEmail"
                    width={28}
                    height={30}
                />
                <div className="SupportEmailForm__inputWrapper">
                    <input
                        className="SupportEmailForm__input"
                        type="email"
                        placeholder={
                            subscribedEmails.length > 0
                                ? newsletterText.alreadySubscribed
                                : newsletterText.placeholder
                        }
                        required
                        autoComplete="email"
                        aria-invalid={errors ? 'true' : 'false'}
                        {...register('email', {
                            required: newsletterText.required,
                            pattern: {
                                value: EMAIL_PATTERN,
                                message: newsletterText.invalidEmail,
                            },
                        })}
                    />
                    {errors.email && (
                        <span className="SupportEmailForm__error">
                            {errors.email?.message}
                        </span>
                    )}
                </div>
            </Label>
            <Button className="Button SupportEmailForm__button" type="submit">
                <IconTelegram
                    className="SupportEmailForm__IconTelegram"
                    width={20}
                    height={16}
                />
                {newsletterText.send}
            </Button>
        </form>
    );
}
