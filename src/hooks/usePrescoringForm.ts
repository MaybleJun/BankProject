import { useForm, UseFormRegister } from 'react-hook-form';
import type { PrescoringForm } from '../components/Prescoring/types';

export function usePrescoringForm(defaultValues: PrescoringForm) {
    const {
        register, formState: {
            errors, isDirty, dirtyFields, isSubmitting,
        }, handleSubmit, reset, watch,
    } = useForm<PrescoringForm>({
        mode: 'all',
        defaultValues,
    });

  type Register = UseFormRegister<PrescoringForm>;

  return {
      register: register as Register,
      errors,
      handleSubmit,
      reset,
      watch,
      isDirty,
      dirtyFields,
      isSubmitting,
  };
}
