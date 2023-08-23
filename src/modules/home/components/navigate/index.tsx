import { navigateMenus } from '@modules/home/contants';
import Image from '@shared/components/atoms/Image';
import Link from '@shared/components/atoms/Link';

const Navigate: React.FC = () => {
  return (
    <div className='fixed bottom-[10%] z-[1] right-[24px] flex flex-col gap-y-5 rounded-xl px-4 py-6 b bg-primary-gradient'>
      {navigateMenus.map((el) => (
        <div
          key={el.url}
          className='w-8 transition-all duration-300 opacity-60 hover:opacity-100 hover:scale-110 cursor-pointer'
        >
          <Link href='/' search={el.url}>
            <Image src={el.icon} alt={el.label} className='invert' />
          </Link>
        </div>
      ))}
    </div>
  );
};
export default Navigate;
