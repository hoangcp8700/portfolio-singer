import React from 'react';

import { StyledWrapperImage, StyledWrapperImageProps } from './styles';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement>, StyledWrapperImageProps {
  classNameWrapper?: string;
  srcMobile?: string;
  srcTablet?: string;
}

const Image: React.FC<ImageProps> = ({
  src = '',
  srcMobile = undefined,
  srcTablet = undefined,
  alt = 'replacing',
  ratio,
  loading = 'lazy',
  size = 'cover',
  classNameWrapper,
  className,
  ...props
}) => (
  <StyledWrapperImage ratio={ratio} size={size} className={classNameWrapper}>
    <picture>
      <source media='(min-width:1024px)' srcSet={src} />
      {srcTablet && <source media='(min-width:768px)' srcSet={srcTablet} />}
      {srcMobile && <source media='(max-width:767px)' srcSet={srcMobile} />}
      <img src={src} alt={alt} loading={loading} className={className} {...props} />
    </picture>
  </StyledWrapperImage>
);

export default Image;
