import bannerAvatar from '@shared/assets/images/avatar_banner.png';
import homeIcon from '@shared/assets/icons/ic_home.svg';
import informationIcon from '@shared/assets/icons/ic_information.svg';
import peopleIcon from '@shared/assets/icons/ic_people.svg';
import contactIcon from '@shared/assets/icons/ic_contact.svg';
import listIcon from '@shared/assets/icons/ic_list.svg';
import socialIcon from '@shared/assets/icons/ic_socials.png';

const navigateMenus = [
  {
    icon: homeIcon,
    label: 'Home',
    url: 'section=my-home',
  },
  {
    icon: informationIcon,
    label: 'Giới Thiệu',
    url: 'section=gioi-thieu',
  },
  {
    icon: listIcon,
    label: 'Sản Phẩm',
    url: 'section=san-pham',
  },
  {
    icon: peopleIcon,
    label: 'Hợp Tác',
    url: 'section=hop-tac',
  },
  {
    icon: socialIcon,
    label: 'Mạng Xã Hội',
    url: 'section=mang-xa-hoi',
  },
  {
    icon: contactIcon,
    label: 'Liên Hệ',
    url: 'section=lien-he',
  },
];

const banner = {
  bannerAvatar,
  title: 'Young Profile',
};
export { banner, navigateMenus };
