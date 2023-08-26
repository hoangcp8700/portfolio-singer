import React, { forwardRef } from 'react';

import { StyledWrapperError } from '../Input/styles';

import { StyledTextarea, StyledTextareaProps, StyledWrapperTextarea } from './styles';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, StyledTextareaProps {
  error?: boolean;
  onShowError?: (value: boolean) => void;
}

const TextAreaRef: React.ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaProps> = (
  { error, fullWidth, onShowError, ...props },
  ref,
) => (
  <StyledWrapperTextarea fullWidth={fullWidth}>
    <StyledTextarea ref={ref} error={error} {...props} />
    {error && (
      <StyledWrapperError
        onMouseEnter={() => onShowError && onShowError(true)}
        onMouseLeave={() => onShowError && onShowError(false)}
      >
        <div className='animate-scale w-full h-full bg-red-500 rounded-full' />
      </StyledWrapperError>
    )}
  </StyledWrapperTextarea>
);
const TextArea = forwardRef(TextAreaRef);

export default TextArea;
