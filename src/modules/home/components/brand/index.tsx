import React from 'react';
import Container from '@shared/components/common/Container';
import brands from '@modules/home/contants/brand';
import Image from '@shared/components/atoms/Image';
import Heading from '@shared/components/atoms/Heading';
import Animate from '@shared/components/molecules/Animate';

import Layer from './components/layer';

interface BrandProps {}

const Brand: React.FC<BrandProps> = () => (
  <div className='py-10'>
    <Layer />
    <Container>
      <div>
        <Animate name='fade-right'>
          <Heading className='text-black900 text-[32px] md:text-[54px] font-semibold text-center'>
            Đã làm việc cùng
          </Heading>
        </Animate>

        <div className='grid grid-cols-3 md:grid-cols-5 gap-8 mt-10'>
          {brands.map((item, idx) => (
            <Animate name='zoom-in-up' delay={400 + idx * 100}>
              <div className='rounded-2xl overflow-hidden' key={item.label}>
                <Image src={item.logo} alt={item.label} size='contain' />
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </Container>
    <Layer />
  </div>
);

Brand.defaultProps = {};

export default Brand;
