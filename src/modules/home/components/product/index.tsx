import Heading from '@shared/components/atoms/Heading';
import Container from '@shared/components/common/Container';
import React, { useState } from 'react';
import productData from '@modules/home/contants/products';
import styled from '@emotion/styled/macro';
import clsx from 'clsx';
import useDevices from '@shared/hooks/useDevices';

import ProductItem, { ProductItemPlayer, ProductItemProps } from './components/ProductItem';

const Product: React.FC = () => {
  const { isTablet } = useDevices();

  const [productActive, setProductActive] = useState<ProductItemProps | undefined>(undefined);

  const openPlayer = (product: ProductItemProps) => {
    if (productActive && productActive.src === product.src) {
      return setProductActive(undefined);
    }
    setProductActive(product);
  };
  return (
    <Container>
      <div className='bg-white/30 px-4 md:px-8 py-8 md:py-16 rounded-2xl'>
        <Heading className='text-lg md:text-[32px] font-medium mb-4 md:mb-10 text-black900'>Danh sách bài hát</Heading>

        <div className={clsx('flex', !!productActive && 'gap-4')}>
          <div className='flex-1'>
            <div className='flex flex-col gap-y-8'>
              {productData.map((el) => (
                <ProductItem
                  key={el.title}
                  active={el.src === productActive?.src}
                  title={el.title}
                  src={el.src}
                  desc={el.desc}
                  date={el.date}
                  isTablet={isTablet}
                  onClick={() => openPlayer(el)}
                />
              ))}
            </div>
          </div>
          {!isTablet && (
            <ProductDetailWrapper className='hidden md:block' open={!!productActive}>
              {productActive && (
                <ProductItemPlayer title={productActive?.title} src={productActive?.src} desc={productActive?.desc} />
              )}
            </ProductDetailWrapper>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Product;

const ProductDetailWrapper = styled.div<{ open: boolean }>`
  width: ${(props) => (props.open ? '400px' : '0')};
  transition: width 0.3s ease-in-out;
`;
