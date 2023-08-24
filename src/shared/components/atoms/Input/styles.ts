import styled from '@emotion/styled';
import tw from 'twin.macro';

export interface StyledInputProps {
  sizes?: 'sm' | 'md' | 'lg';
  radius?: 'md' | 'lg' | 'full' | 'none';
  fullWidth?: boolean;
  error?: boolean;
}

const styles = {
  sizes: {
    sm: tw`h-[40px] md:text-base text-sm`,
    md: tw`h-[40px] sm:h-[48px] md:text-base text-sm`,
    lg: tw`h-[48px] sm:h-[56px] md:text-lg text-base`,
  },
  radius: {
    lg: tw`rounded-xl`,
    md: tw`rounded-lg`,
    full: tw`rounded-full`,
    none: '',
  },
};

export const StyledWrapperInput = styled.div<StyledInputProps>(({ fullWidth }) => [
  fullWidth ? tw`w-full` : tw`w-max`,
  tw`relative`,
]);

export const StyledInput = styled.input<StyledInputProps>(({ sizes, radius, disabled, error }) => [
  tw`reset-input relative block bg-transparent border transition-all w-full px-6 focus:ring-0 duration-300`,
  sizes && styles.sizes[sizes],
  radius && styles.radius[radius],
  error
    ? tw`text-red-600 border-red-500 focus:border-red-600 placeholder:text-red-400 pr-10`
    : tw`text-gray-800 border-gray-700 focus:border-blue-600 placeholder:text-gray-600 focus:placeholder:text-gray-500/75`,
  disabled && tw`cursor-not-allowed opacity-50 bg-gray-800/30`,
]);

export const StyledWrapperError = styled.div`
  ${tw`absolute right-4 top-[50%] translate-y-[-50%] w-4 h-4 cursor-pointer`}
`;
