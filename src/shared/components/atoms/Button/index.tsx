import React from 'react';

import {
  ButtonElementProps,
  ButtonVariant,
  StyleButton,
  StyledWrapperButton,
  StyledWrapperButtonProps,
} from './styles';

export interface ButtonProps extends ButtonElementProps, StyledWrapperButtonProps {
  children: React.ReactNode;
  wrapperClassName?: string;
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  size = 'md',
  radius = 'lg',
  variants = ButtonVariant.outlined,
  children,
  fullWidth,
  wrapperClassName,
  ...props
}) => (
  <StyledWrapperButton
    variants={variants}
    size={size}
    radius={radius}
    fullWidth={fullWidth}
    className={wrapperClassName}
  >
    <StyleButton type={type} {...props}>
      {children}
    </StyleButton>
  </StyledWrapperButton>
);

export default Button;
