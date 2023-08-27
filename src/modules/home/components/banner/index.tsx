import Heading from '@shared/components/atoms/Heading';
import React from 'react';
// import info2 from '@shared/assets/images/info_2.jpeg';
import info2 from '@shared/assets/images/info_2a.png';
import { info } from '@modules/home/contants';
import styled from '@emotion/styled/macro';
import tw from 'twin.macro';
import Animate from '@shared/components/molecules/Animate';

const Banner: React.FC = () => {
  return (
    <div className='relative bg-white overflow-hidden'>
      <div className='absolute flex flex-col justify-center z-[1] right-4 md:right-[8%] top-[20%]'>
        <Animate name='zoom-in-right' delay={250}>
          <HeadingStyled
            className='text-black800 text-[32px] md:text-[64px] text-center font-bold bg-primary-gradient'
            style={{}}
          >
            {info.name}
          </HeadingStyled>
        </Animate>

        <div className='flex flex-col-reverse md:flex-row flex-wrap items-center gap-4 justify-center mt-4'>
          {info?.careers?.map((el, idx) => (
            <Animate name='zoom-in-up' delay={500 + idx * 100}>
              <HeadingWrapperStyled>
                <Heading className='text-sm md:text-xl'>{el}</Heading>
              </HeadingWrapperStyled>
            </Animate>
          ))}
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${info2})` }}
        className='w-full h-[70vh] md:h-[100vh] bg-[length:cover] bg-center sm:bg-[80%] md:bg-[60%]'
      />
    </div>
  );
};

export default Banner;

const HeadingStyled = styled(Heading)`
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const HeadingWrapperStyled = styled.div`
  border-radius: 32px;
  padding: 4px 16px;
  ${tw`border border-solid border-gray-300`}
`;
