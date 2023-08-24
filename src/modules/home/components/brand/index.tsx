import React from 'react';
import Container from '@shared/components/common/Container';
import brands from '@modules/home/contants/brand';
import Image from '@shared/components/atoms/Image';
import Heading from '@shared/components/atoms/Heading';

import Layer from './components/layer';

interface BrandProps {}

const Brand: React.FC<BrandProps> = () => (
  <div className='t-technologies'>
    <Layer />
    <Container noPaddingTopBottom>
      <div>
        <Heading className='text-black/80 text-[72px] font-bold text-center'>Đã Hợp Tác Cùng</Heading>

        <div className='grid grid-cols-5 gap-8 mt-10'>
          {brands.map((item) => (
            <div className='rounded-2xl overflow-hidden' key={item.label}>
              {/* <Animate name="zoom-in-up" delay={idx * 100}> */}
              <Image src={item.logo} alt={item.label} size='contain' />
              {/* </Animate> */}
            </div>
          ))}
        </div>
      </div>
    </Container>
    <Layer />
  </div>
);

Brand.defaultProps = {};

export default Brand;
