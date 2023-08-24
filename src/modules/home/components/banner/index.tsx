import Heading from '@shared/components/atoms/Heading';
import React from 'react';
import socials from '@modules/home/contants/social';
import Link from '@shared/components/atoms/Link';
import Image from '@shared/components/atoms/Image';
import Container from '@shared/components/common/Container';

interface BannerProps {
  bannerSrc?: string;
  title: string;
}
const Banner: React.FC<BannerProps> = ({ bannerSrc, title }) => {
  return (
    <div className='h-[75vh] md:h-screen relative before:absolute before:content-[""] before:h-[35vh] before:md:h-[50vh] before:bottom-0 before:bg-black800 before:left-0 before:right-0 '>
      <Container noPaddingTopBottom>
        <div className='relative'>
          <div className='absolute top-[5vh] md:top-[6vh] w-full'>
            <Heading className='font-semibold text-[54px] md:text-[90px] text-black/80 text-center'>{title}</Heading>
          </div>

          <div className='absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] w-[30vh] sm:w-[40vh] h-[30vh] sm:h-[40vh] md:w-[55vh] md:h-[55vh] bg-primary-gradient rounded-full drop-shadow-2xl z-[2]' />

          <div className='min-h-[75vh] md:min-h-screen max-w-[300px] sm:max-w-[450px] md:max-w-[550px] mx-auto flex items-end  relative z-[2]'>
            <img src={bannerSrc} alt='banner-avatar' className='w-full h-full drop-shadow-3xl ' />
          </div>

          <div className='absolute left-[50%] bottom-0 -translate-x-[50%] w-full max-w-[30vh] sm:max-w-[40vh] md:max-w-[550px] h-[40vh] border-4 border-solid border-white' />

          <div className='absolute left-[50%] bottom-0 -translate-x-[50%] w-full max-w-[30vh] sm:max-w-[40vh] md:max-w-[550px] h-[40vh] p-4 md:p-8'>
            <div className='relative w-full h-full bg-primary-gradient border-3 border border-solid border-transparent bg-clip-padding before:content-[""] before:absolute before:inset-0 before:bg-black800 before:z-[1] before:m-1' />
          </div>

          <div className='absolute left-[50%] bottom-0 -translate-x-[50%] w-full max-w-[30vh] sm:max-w-[40vh] md:max-w-[550px] h-[40vh] p-8 md:p-12'>
            <div className='relative w-full h-full bg-primary-gradient border-3 border border-solid border-transparent bg-clip-padding before:content-[""] before:absolute before:inset-0 before:bg-black800 before:z-[1] before:m-1' />
          </div>

          <div className='absolute bottom-8 left-0 md:left-6 flex flex-col gap-y-3 z-[4]'>
            {socials.map((item) => {
              return (
                <div key={item.url} className='w-10'>
                  <Link href={item.url} target='_blank'>
                    <Image src={item.iconSrc} alt={item.url} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
