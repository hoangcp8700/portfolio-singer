import Input, { InputProps } from '@shared/components/atoms/Input';
import FieldLabel from '@shared/components/molecules/Form/components/FieldLabel';
import FormControl from '@shared/components/molecules/Form/components/FormControl';
import clsx from 'clsx';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

export interface InputControlProps extends InputProps {
  label?: string;
  name: string;
  required?: boolean;
  showErrorMessage?: boolean;
}

const InputControl: React.FC<InputControlProps> = ({
  label,
  className,
  name,
  required,
  showErrorMessage,
  ...props
}): JSX.Element => {
  const {
    formState: { errors },
  } = useFormContext();

  const [showError, setShowError] = useState(false);

  return (
    <FormControl
      showError={showErrorMessage || showError}
      name={name}
      className={clsx('w-full', className)}
      render={({ field }) => {
        return (
          <>
            <FieldLabel name={name} label={label} required={required} />
            <Input {...field} {...props} id={name} error={errors[name]} onShowError={(value) => setShowError(value)} />
          </>
        );
      }}
    />
  );
};

export default InputControl;
