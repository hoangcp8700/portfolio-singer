import bannerAvatar from '@shared/assets/images/avatar_banner.png';
import homeIcon from '@shared/assets/icons/ic_home.svg';
import informationIcon from '@shared/assets/icons/ic_information.svg';
import peopleIcon from '@shared/assets/icons/ic_people.svg';
import contactIcon from '@shared/assets/icons/ic_contact.svg';
import listIcon from '@shared/assets/icons/ic_list.svg';
import socialIcon from '@shared/assets/icons/ic_socials.png';

import { HomeSectionEnum } from '../enum';

const navigateMenus = [
  {
    id: HomeSectionEnum.Home,
    icon: homeIcon,
    label: 'Young',
  },
  {
    id: HomeSectionEnum.Introduce,
    icon: informationIcon,
    label: 'Giới Thiệu',
  },
  {
    id: HomeSectionEnum.Product,
    icon: listIcon,
    label: 'Sản Phẩm',
  },
  {
    id: HomeSectionEnum.Brand,
    icon: peopleIcon,
    label: 'Hợp Tác',
  },
  {
    id: HomeSectionEnum.Social,
    icon: socialIcon,
    label: 'Mạng Xã Hội',
  },
  {
    id: HomeSectionEnum.Contact,
    icon: contactIcon,
    label: 'Liên Hệ',
  },
];

const banner = {
  bannerAvatar,
  title: 'Young Profile',
};
export { banner, navigateMenus };
