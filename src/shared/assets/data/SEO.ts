import { CONSTANTS } from '@shared/constants';

export const favicons: Array<React.ComponentPropsWithoutRef<'link'>> = [
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicon/apple-touch-icon.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon/favicon-16x16.png',
  },
  { rel: 'manifest', href: '/favicon/site.webmanifest' },
  {
    rel: 'mask-icon',
    href: '/favicon/safari-pinned-tab.svg',
    color: '#00e887',
  },
  { rel: 'shortcut icon', href: '/favicon/favicon.ico' },
];

export const defaultMeta = {
  title: 'Yung Portfolio',
  siteName: 'Yung Portfolio',
  description: 'Yung Portfolio',
  keyword: 'Yung Portfolio',
  url: CONSTANTS.DOMAIN_CLIENT,
  type: 'website',
  robots: 'follow, index',
  imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  themeColor: '#d159f2',
};
