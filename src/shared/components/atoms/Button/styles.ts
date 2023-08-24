import styled from '@emotion/styled';
import tw from 'twin.macro';

export enum ButtonVariant {
  primary = 'primary',
  secondary = 'secondary',
  contained = 'contained',
  none = 'none',
  outlined = 'outlined',
  dot = 'dot',
}
export interface StyledWrapperButtonProps {
  size?: 'sm' | 'md' | 'lg';
  variants?: ButtonVariant;
  radius?: 'md' | 'lg' | 'full' | 'none';
  fullWidth?: boolean;
}

export interface ButtonElementProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const styles = {
  variants: {
    primary: tw`relative before:content-[""] before:inset-0 before:bg-gradient-to-br before:from-[#ff8a05] before:via-[#ff5478] before:to-[#ff00c6] before:hover:from-[#ff00c6] before:hover:via-[#ff5478] before:hover:to-[#ff8a05] before:absolute before:transition-all before:duration-2000 before:ease-in-out text-white h-[48px] sm:h-[48px]`,
    secondary: '',
    outlined: tw`border border-gray-200 shadow-lg`,
    contained: '',
    dot: tw`relative overflow-visible hover:delay-1000 hover:text-white hover:before:left-[50%] hover:before:rotate-180 hover:after:delay-1000 hover:after:scale-150 before-after:content-[""] before-after:absolute before-after:rounded-full before-after:bg-blue-800  before-after:z-0 before:translate-y-[-75%] before:w-2 before:h-2 before-after:top-[50%] before:ease-in-out before:duration-1000 before:shadow-lg before:left-0  after:w-10 after:h-10 after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%] after:scale-0 after:ease-in after:duration-300`,
    none: '',
  },
  size: {
    sm: tw`h-[40px]`,
    md: tw`h-[40px] sm:h-[48px]`,
    lg: tw`h-[48px] sm:h-[56px]`,
  },
  radius: {
    lg: tw`rounded-xl`,
    md: tw`rounded-lg`,
    full: tw`rounded-full`,
    none: '',
  },
};

export const StyledWrapperButton = styled.div<StyledWrapperButtonProps>(({ variants, size, radius, fullWidth }) => [
  tw`relative overflow-hidden`,
  variants && styles.variants[variants],
  size && styles.size[size],
  radius && styles.radius[radius],
  fullWidth ? tw`w-full` : tw`w-max`,

  // NOTE: Custom inside element
  // css`
  //   button {
  //     ${tw`reset-button relative h-full flex adjust-flex-center overflow-hidden transition-all px-5 sm:px-8 focus:ring-0`}
  //   }
  // `,
]);

export const StyleButton = styled.button<ButtonElementProps>(({ disabled }) => [
  disabled &&
    tw`bg-gray-300 shadow-inner text-gray-800 cursor-not-allowed opacity-70 hover:bg-gray-700 hover:text-gray-400`,
  tw`reset-button relative h-full flex adjust-flex-center overflow-hidden transition-all px-5 sm:px-8 focus:ring-0 z-1`,
]);
