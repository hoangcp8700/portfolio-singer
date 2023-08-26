import { FieldValues, SubmitHandler, UseFormReturn } from 'react-hook-form';

import { FormControlProps } from './components/FormControl';
import { FieldErrorProps } from './components/FieldError';
import { FieldLabelProps } from './components/FieldLabel';
import { ErrorMessageProps } from './components/ErrorMessage';
import { FieldSubmitProps } from './components/FieldSubmit';
import { FormGroupProps } from './components/FormGroup';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface FormProps<Value extends FieldValues = any> {
  children?: React.ReactNode;
  className?: string;
  methods: UseFormReturn<Value>;
  onSubmit: (
    values: Value,
    formHandlers: UseFormReturn<Value>,
    event: React.FormEvent<HTMLFormElement>,
  ) => void | Promise<void> | ReturnType<SubmitHandler<Value>>;
}

export interface FormProviderProps extends FormProps {
  FormControl?: React.FC<FormControlProps>;
  FieldError?: React.FC<FieldErrorProps>;
  FieldLabel?: React.FC<FieldLabelProps>;
  ErrorMessage?: React.FC<ErrorMessageProps>;
  FieldSubmit?: React.FC<FieldSubmitProps>;
  FormGroup?: React.FC<FormGroupProps>;
}
