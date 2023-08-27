import Heading from '@shared/components/atoms/Heading';
import Image from '@shared/components/atoms/Image';
import Text from '@shared/components/atoms/Text';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import playIcon from '@shared/assets/icons/ic_play.svg';
import pauseIcon from '@shared/assets/icons/ic_pause.svg';
import clsx from 'clsx';
import Link from '@shared/components/atoms/Link';

export interface ProductItemProps {
  thumbnail?: string;
  title?: string;
  desc?: string;
  src?: string;
  date?: string;
}

interface Props extends ProductItemProps {
  onClick?: () => void;
  active?: boolean;
  isTablet?: boolean;
}
function secondsToTime(e: number) {
  const h = Math.floor(e / 3600)
    .toString()
    .padStart(2, '0');
  const m = Math.floor((e % 3600) / 60)
    .toString()
    .padStart(2, '0');
  const s = Math.floor(e % 60)
    .toString()
    .padStart(2, '0');

  return `${parseInt(h, 10) ? `${h}:` : ''}${m}:${s}`;
}

const ProductItem: React.FC<Props> = ({ title, src, date, desc, active, isTablet, onClick }) => {
  const [duration, setDuration] = useState(0);
  const [showAllDes, setShowAllDes] = useState(false);
  return (
    <div
      className={clsx(
        'flex flex-col md:flex-row rounded-lg p-4 gap-x-6 bg-white/40 transition-colors duration-300 ease hover:bg-gray-200/40 cursor-pointer',
        active && 'bg-slate-100/20',
      )}
      onClick={() => {
        if (isTablet) {
          setShowAllDes((prev) => !prev);
        }
        onClick?.();
      }}
      aria-hidden
    >
      <div className='w-full md:w-[250px] h-[300px] md:h-[140px] flex-shrink-0 relative rounded-lg overflow-hidden'>
        <ReactPlayer
          url={src}
          light={duration > 0 && !isTablet}
          controls
          playIcon={<div />}
          width='100%'
          height='100%'
          onDuration={(value) => setDuration(value)}
        />
        <div className='absolute inset-0 hidden md:block' />
      </div>
      <div className='flex-1 py-2 flex flex-col justify-between relative'>
        <div className='w-10 h-10 absolute hidden md:block -top-12 md:top-0 right-2 md:right-0 brightness-0 md:brightness-100 invert md:invert-0'>
          <Image src={active ? pauseIcon : playIcon} />
        </div>
        <div>
          <Text className='text-black800 font-medium'>
            {date} / {secondsToTime(duration)}
          </Text>
          <Heading className='text-xl font-semibold text-black800'>{title}</Heading>
        </div>
        <Text
          className={clsx('text-sm md:text-base md:line-clamp-3 text-black800 mt-2', !showAllDes && 'line-clamp-4')}
          content={desc}
        />
      </div>
    </div>
  );
};

export const ProductItemPlayer: React.FC<ProductItemProps> = ({ title, src, desc }) => {
  return (
    <div className='flex flex-col rounded-lg p-4 gap-x-6 bg-white/40'>
      <div className='w-full h-[300px] relative overflow-hidden rounded-lg'>
        <ReactPlayer url={src} controls playIcon={<div />} width='100%' height='100%' />
      </div>
      <div className='flex-1 py-2 flex flex-col justify-between'>
        <Link href={src} target='_blank'>
          <Heading className='text-xl font-bold hover:underline text-black800'>{title}</Heading>
        </Link>
        <div className='max-h-[220px] overflow-y-auto pr-2 mt-2'>
          <Text className='text-sm text-black800' content={desc} />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
