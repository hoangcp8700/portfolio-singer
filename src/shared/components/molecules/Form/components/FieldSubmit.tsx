import Button, { ButtonProps } from '@shared/components/atoms/Button';
import { ButtonVariant } from '@shared/components/atoms/Button/styles';
import React from 'react';
import { useFormContext } from 'react-hook-form';

export interface FieldSubmitProps extends ButtonProps {}

const FieldSubmit: React.FC<FieldSubmitProps> = ({
  children,
  disabled,
  variants = ButtonVariant.primary,
  ...props
}) => {
  const { formState } = useFormContext();
  const { isSubmitting, isDirty, isValid, isSubmitted } = formState;

  const isDisabled = disabled || isSubmitting || (!isDirty && !isValid && isSubmitted);
  const hasErrors = isDirty && !isValid && isSubmitted && !isSubmitting;

  return (
    <Button type='submit' variants={variants} disabled={isDisabled || hasErrors} {...props}>
      {children}
    </Button>
  );
};

export default FieldSubmit;
