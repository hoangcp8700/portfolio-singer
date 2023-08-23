import { css } from '@emotion/react';
import styled from '@emotion/styled';
import tw from 'twin.macro';

export interface StyledWrapperImageProps {
  ratio?: [number, number];
  size?: 'cover' | 'contain' | 'fill' | 'none' | 'inherit';
}

export const StyledWrapperImage = styled.div<StyledWrapperImageProps>(({ ratio = [1, 1], size }) => [
  tw`relative block overflow-hidden w-full ease-in-out duration-300`,
  css`
    aspect-ratio: ${ratio[0]} / ${ratio[1]};
    img {
      ${tw`absolute h-full w-full left-0 top-0`}
      object-fit: ${size};
    }
  `,
]);
