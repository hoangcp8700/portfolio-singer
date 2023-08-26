/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { forwardRef, useId } from 'react';
import { FormProvider as FormProviderApp } from 'react-hook-form';

import { FormProps } from '../types';

const FormProviderRef: React.ForwardRefRenderFunction<HTMLFormElement, FormProps> = (
  { children, methods, onSubmit, className },
  ref,
) => {
  const [formId] = useId();

  const onSubmitForm = React.useCallback(
    async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
      event.preventDefault();
      event.stopPropagation();

      await methods.handleSubmit(async (values) => {
        try {
          if (onSubmit) {
            await onSubmit(values, methods, event);
          }
        } catch (error) {
          console.error('Submit Form Error:', error);
        }
      })(event);
    },
    [onSubmit, methods],
  );

  return (
    <form id={formId} ref={ref} className={className} onSubmit={onSubmitForm}>
      <FormProviderApp {...methods}>{children}</FormProviderApp>
    </form>
  );
};

const FormProvider = forwardRef(FormProviderRef);

export default FormProvider;
