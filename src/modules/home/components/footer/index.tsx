import socials from '@modules/home/contants/social';
import Image from '@shared/components/atoms/Image';
import Link from '@shared/components/atoms/Link';
import Text from '@shared/components/atoms/Text';
import Container from '@shared/components/common/Container';
import Animate from '@shared/components/molecules/Animate';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <Container noPaddingTopBottom className='mt-10'>
      <div className='flex items-center justify-between border-t border-solid border-gray-300'>
        <div className='flex gap-x-3 items-center py-4'>
          {socials.map((item, idx) => {
            return (
              <Animate name='zoom-in-up' delay={idx * 100} key={item.name} className='w-8 md:w-10'>
                <Link href={item.url} useExternal={item.useExternal} target='_blank'>
                  <Image src={item.iconSrc} alt={item.url} />
                </Link>
              </Animate>
            );
          })}
        </div>
        <Animate name='zoom-in-up'>
          <Text className='text-black800'>Yung / {year}</Text>
        </Animate>
      </div>
    </Container>
  );
};

export default Footer;
