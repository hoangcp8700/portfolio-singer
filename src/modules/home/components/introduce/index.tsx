import Heading from '@shared/components/atoms/Heading';
import React from 'react';
import info1 from '@shared/assets/images/info_1.jpeg';

const Introduce: React.FC = () => {
  return (
    <div className=' bg-white'>
      <Heading className='text-black800 text-4xl'>Vocal</Heading>
      <div className='min-h-screen w-full flex items-end'>
        <div style={{ backgroundImage: `url(${info1})` }} className='h-[50vh] w-full bg-cover bg-[100%_15%]' />
      </div>
    </div>
  );
};

export default Introduce;
