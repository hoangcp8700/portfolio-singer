import styled from '@emotion/styled';
import tw from 'twin.macro';

export interface StyledTextareaProps {
  fullWidth?: boolean;
  error?: boolean;
}

export const StyledWrapperTextarea = styled.div<StyledTextareaProps>(({ fullWidth = true }) => [
  fullWidth ? tw`w-full` : tw`w-max`,
  tw`relative`,
]);

export const StyledTextarea = styled.textarea<StyledTextareaProps>(({ disabled, error }) => [
  tw`reset-input resize-none relative block bg-transparent border-b transition-all w-full px-4 focus:ring-0 duration-300 md:text-base text-sm`,
  error
    ? tw`text-red-600 border-red-500 focus:border-red-600 placeholder:text-red-400 pr-10`
    : tw`text-gray-800 border-gray-700 focus:border-blue-600 placeholder:text-gray-600 focus:placeholder:text-gray-500/75`,
  disabled && tw`cursor-not-allowed opacity-50 bg-gray-800/30`,
]);
