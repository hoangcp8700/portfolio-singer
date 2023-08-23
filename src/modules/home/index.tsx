import Banner from './components/banner';
import Branch from './components/branch';
import Contact from './components/contacts';
import Introduce from './components/introduce';
import Navigate from './components/navigate';
import Product from './components/product';
import Social from './components/social';
import { banner } from './contants';

const Home = () => {
  return (
    <>
      <Navigate />
      <Banner bannerSrc={banner.bannerAvatar} title={banner.title} />
      <Introduce />
      <Product />
      <Branch />
      <Social />
      <Contact />
    </>
  );
};

export default Home;
