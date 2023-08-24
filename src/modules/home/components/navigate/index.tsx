import { navigateMenus } from '@modules/home/contants';
import { HomeSectionEnum } from '@modules/home/enum';
// import Button from '@shared/components/atoms/Button';
import Image from '@shared/components/atoms/Image';
import clsx from 'clsx';

interface NavigateProps {
  sectionCurrent?: HomeSectionEnum;
  onChangeSection: (sectionName: HomeSectionEnum) => void;
}

const Navigate = ({ sectionCurrent, onChangeSection }: NavigateProps) => {
  return (
    <div className='fixed bottom-[10%] right-[12px] md:right-[24px] flex flex-col gap-y-5 rounded-xl px-4 py-6 b bg-primary-gradient z-[10]'>
      {navigateMenus.map((el) => (
        <div
          key={el.id}
          className={clsx(
            'w-6 md:w-8 transition-all duration-300 opacity-60 hover:opacity-100 hover:scale-110 cursor-pointer',
            sectionCurrent === el.id && 'opacity-100',
          )}
          title={el.label}
          aria-hidden
          onClick={() => onChangeSection(el.id)}
        >
          <Image src={el.icon} alt={el.label} className='invert' />
        </div>
      ))}
    </div>
  );
};
export default Navigate;
