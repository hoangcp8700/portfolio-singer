import socials from '@modules/home/contants/social';
import Image from '@shared/components/atoms/Image';
import Link from '@shared/components/atoms/Link';
import Text from '@shared/components/atoms/Text';
import Container from '@shared/components/common/Container';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <Container noPaddingTopBottom className='mt-10'>
      <div className='flex items-center justify-between border-t border-solid border-gray-300'>
        <div className='flex gap-x-3 items-center py-4'>
          {socials.map((item) => {
            return (
              <div key={item.url} className='w-8 md:w-10'>
                <Link href={item.url} useExternal={item.useExternal} target='_blank'>
                  <Image src={item.iconSrc} alt={item.url} />
                </Link>
              </div>
            );
          })}
        </div>
        <div>
          <Text className='text-black800'>Yung / {year}</Text>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
