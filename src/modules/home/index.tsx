import backgroungApp from '@shared/assets/images/background_app.jpg';
import styled from '@emotion/styled/macro';
import { useEffect } from 'react';
import AOS from 'aos';

import Banner from './components/banner';
import Branch from './components/brand';
import Contact from './components/contacts';
import Footer from './components/footer';
import Introduce from './components/introduce';
import Navigate from './components/navigate';
import Product from './components/product';
import useScrollSection from './hooks/useScrollSection';

const Home = () => {
  const { bannerRef, brandRef, contactRef, introduceRef, productsRef, sectionCurrent, onChangeSection } =
    useScrollSection();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <HomeWrapper>
      <Navigate sectionCurrent={sectionCurrent} onChangeSection={onChangeSection} />
      <div ref={bannerRef}>
        <Banner />
      </div>
      <div ref={introduceRef}>
        <Introduce />
      </div>
      <div ref={productsRef}>
        <Product />
      </div>
      <div ref={brandRef}>
        <Branch />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  background-image: url(${backgroungApp});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
