import { useCallback, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

import { HomeSectionEnum } from '../enum';

const useScrollSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const bannerRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const introduceRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  const sectionCurrent = (searchParams.get('section') || HomeSectionEnum.Home) as HomeSectionEnum;

  const onChangeSection = (sectionName: HomeSectionEnum) => {
    setSearchParams({ section: sectionName });
  };
  const bannerScroll = useCallback(
    () =>
      bannerRef?.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      }),
    [],
  );

  const introduceScroll = useCallback(
    () =>
      introduceRef?.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      }),
    [],
  );

  const brandScroll = useCallback(
    () =>
      brandRef?.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      }),
    [],
  );

  const contactScroll = useCallback(
    () =>
      contactRef?.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      }),
    [],
  );

  const productScroll = useCallback(
    () =>
      productsRef?.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      }),
    [],
  );

  const socialScroll = useCallback(
    () =>
      socialRef?.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      }),
    [],
  );

  const section = searchParams.get('section');

  useEffect(() => {
    if (section) {
      switch (section) {
        case HomeSectionEnum.Social:
          console.log('222');
          socialScroll();
          break;
        case HomeSectionEnum.Introduce:
          introduceScroll();
          break;
        case HomeSectionEnum.Brand:
          brandScroll();
          break;
        case HomeSectionEnum.Contact:
          contactScroll();
          break;
        case HomeSectionEnum.Product:
          productScroll();
          break;
        default:
          bannerScroll();
          return undefined;
      }
    }
    return undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [section]);

  return { bannerRef, brandRef, contactRef, introduceRef, productsRef, socialRef, sectionCurrent, onChangeSection };
};

export default useScrollSection;
