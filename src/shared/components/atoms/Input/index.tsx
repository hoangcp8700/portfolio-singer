import React, { forwardRef } from 'react';

import { StyledInput, StyledInputProps, StyledWrapperError, StyledWrapperInput } from './styles';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, StyledInputProps {
  onShowError?: (value: boolean) => void;
}

const InputRef: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { type = 'text', error, fullWidth, onShowError, ...props },
  ref,
) => (
  <StyledWrapperInput fullWidth={fullWidth}>
    <StyledInput ref={ref} type={type} error={error} {...props} />

    {error && (
      <StyledWrapperError
        onMouseEnter={() => onShowError && onShowError(true)}
        onMouseLeave={() => onShowError && onShowError(false)}
      >
        <div className='animate-scale w-full h-full bg-red-500 rounded-full' />
      </StyledWrapperError>
    )}
  </StyledWrapperInput>
);
const Input = forwardRef(InputRef);

export default Input;
