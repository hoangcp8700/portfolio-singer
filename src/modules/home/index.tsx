import Banner from './components/banner';
import Branch from './components/brand';
import Contact from './components/contacts';
import Footer from './components/footer';
import Introduce from './components/introduce';
import Navigate from './components/navigate';
import Product from './components/product';
// import { banner } from './contants';
import useScrollSection from './hooks/useScrollSection';

const Home = () => {
  const { bannerRef, brandRef, contactRef, introduceRef, productsRef, sectionCurrent, onChangeSection } =
    useScrollSection();

  return (
    <>
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
    </>
  );
};

export default Home;
