import bannerAvatar from '@shared/assets/images/avatar_banner.png';
import homeIcon from '@shared/assets/icons/ic_home.svg';
import informationIcon from '@shared/assets/icons/ic_information.svg';
import peopleIcon from '@shared/assets/icons/ic_people.svg';
import contactIcon from '@shared/assets/icons/ic_contact.svg';
import listIcon from '@shared/assets/icons/ic_list.svg';
import MailIcon from '@shared/assets/icons/ic_mail.svg';
import AddressIcon from '@shared/assets/icons/ic_address.svg';
import PhoneIcon from '@shared/assets/icons/ic_phone.svg';

import { HomeSectionEnum } from '../enum';

const navigateMenus = [
  {
    id: HomeSectionEnum.Home,
    icon: homeIcon,
    label: 'Yung',
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
    id: HomeSectionEnum.Contact,
    icon: contactIcon,
    label: 'Liên Hệ',
  },
];

const contacts = [
  {
    label: '+84 123',
    icon: PhoneIcon,
  },
  {
    label: 'District 12, Ho Chi Minh City',
    icon: AddressIcon,
  },
  {
    label: 'email@gmail.com',
    icon: MailIcon,
  },
];

const banner = {
  bannerAvatar,
  title: 'Yung Profile',
};
export { banner, contacts, navigateMenus };
