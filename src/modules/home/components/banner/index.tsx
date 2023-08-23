import styled from '@emotion/styled';
import Heading from '@shared/components/atoms/Heading';
import React from 'react';

import bannerBackground from '@/shared/assets/images/banner_background.png';

interface BannerProps {
  bannerSrc?: string;
  title: string;
}
const Banner: React.FC<BannerProps> = ({ bannerSrc, title }) => {
  return (
    <Wrapper className='h-screen  relative before:absolute before:content-[""] before:h-[50vh] before:bottom-0 before:bg-black800 before:left-0 before:right-0 '>
      <div className='absolute top-[13vh] md:top-[6vh] w-full'>
        <Heading className='font-bartleen text-[72px] md:text-[90px] text-black/80 text-center'>{title}</Heading>
      </div>
      <div className='absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] w-[30vh] h-[30vh] sm:w-[40vh] sm:h-[40vh] md:w-[55vh] md:h-[55vh] bg-primary-gradient rounded-full drop-shadow-2xl' />
      <div className='min-h-screen max-w-[450px] md:max-w-[550px] mx-auto flex items-end'>
        <img src={bannerSrc} alt='banner-avatar' className='w-full h-full drop-shadow-3xl' />
      </div>
    </Wrapper>
  );
};

export default Banner;

const Wrapper = styled.div`
  background-image: url(${bannerBackground});
`;
