import { useEffect, useState } from 'react';

import { smallMobileMedia, mobileMedia, tabletMedia } from './constants';

const smallMobileMediaQuery = window.matchMedia(`(max-width:${smallMobileMedia}px`);
const mobileMediaQuery = window.matchMedia(`(max-width:${mobileMedia}px`);
const tabletMediaQuery = window.matchMedia(`(max-width: ${tabletMedia}px`);
const desktopMediaQuery = window.matchMedia(`(min-width: ${tabletMedia + 1}px`);

const useDevices = () => {
  const [isSmallMobile, setIsSmallMobile] = useState(window.innerWidth <= smallMobileMedia);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= mobileMedia);
  const [isTablet, setIsTablet] = useState(window.innerWidth <= tabletMedia);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > tabletMedia);

  useEffect(() => {
    const querySmallMobileChanged = (e: MediaQueryListEvent) => {
      setIsSmallMobile(e.matches);
    };
    const queryMobileChanged = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };
    const queryTabletChanged = (e: MediaQueryListEvent) => {
      setIsTablet(e.matches);
    };
    const queryDesktopChanged = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches);
    };

    try {
      smallMobileMediaQuery.addEventListener('change', querySmallMobileChanged);
      mobileMediaQuery.addEventListener('change', queryMobileChanged);
      tabletMediaQuery.addEventListener('change', queryTabletChanged);
      desktopMediaQuery.addEventListener('change', queryDesktopChanged);
    } catch (error) {
      try {
        smallMobileMediaQuery.addListener(querySmallMobileChanged);
        mobileMediaQuery.addListener(queryMobileChanged);
        tabletMediaQuery.addListener(queryTabletChanged);
        desktopMediaQuery.addListener(queryDesktopChanged);
      } catch (err) {
        // Empty
      }
    }

    return () => {
      try {
        smallMobileMediaQuery.removeEventListener('change', querySmallMobileChanged);
        mobileMediaQuery.removeEventListener('change', queryMobileChanged);
        tabletMediaQuery.removeEventListener('change', queryTabletChanged);
        desktopMediaQuery.removeEventListener('change', queryDesktopChanged);
      } catch (error) {
        try {
          smallMobileMediaQuery.removeListener(querySmallMobileChanged);
          mobileMediaQuery.removeListener(queryMobileChanged);
          tabletMediaQuery.removeListener(queryTabletChanged);
          desktopMediaQuery.removeListener(queryDesktopChanged);
        } catch (err) {
          // Empty
        }
      }
    };
  }, []);

  return { isTablet, isMobile, isSmallMobile, isDesktop };
};

export default useDevices;
