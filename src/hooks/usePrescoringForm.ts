import { useForm, UseFormRegister, UseFormTrigger } from 'react-hook-form';
import type { IPrescoringForm } from '../models/PrescoringForm';

export function usePrescoringForm(defaultValues: IPrescoringForm) {
    const {
        register, formState: {
            errors, isDirty, dirtyFields, isSubmitting,
        }, handleSubmit, reset, watch, trigger
    } = useForm<IPrescoringForm>({
        mode: 'all',
        reValidateMode: 'onSubmit',
        defaultValues,
    });

  type Register = UseFormRegister<IPrescoringForm>;

  return {
      register: register as Register,
      errors,
      handleSubmit,
      reset,
      watch,
      isDirty,
      dirtyFields,
      isSubmitting,
      trigger,
  };
}
