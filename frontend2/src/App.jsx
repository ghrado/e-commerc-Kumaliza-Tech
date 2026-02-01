import React from "react";
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/hero.jsx';
import Category from "./components/Category/Category.jsx";
import Category2 from "./components/Category/Category2.jsx";
import Services from "./assets/Services/Services.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Products from "./components/Products/Products.jsx";

import headphone from './assets/hero/headphone.png';
import smartwatch2 from '/home/ghrado/Documents/ghKali/frontend2/src/assets/category/smartwatch2.png';
import Blogs from "./components/Blogs/Blogs.jsx";

const BannerData = {
  discount: '30% OFF',
  title: 'Fine Smile',
  date: '14th - 25st February',
  image: headphone,
  title2: 'Air Solo Bass',
  title3: 'Valentine Special',
  title4: 'Get Yours Now!',
  bgColor: '#f42c37',
}
const BannerData2 = {
  discount: '30% OFF',
  title: 'Happy Hours',
  date: '10th - 28st February',
  image: smartwatch2,
  title2: 'Smarth Solo',
  title3: 'Valentine Special',
  title4: 'Get Yours Now!',
  bgColor: '#2dcc6f',
}

const App = () => {
  return <div className="bg-white dark:bg-gray-900 dark:text-white
  duration-200 overflow-hidden">
    <Navbar/>
    <Hero/>
    <Category/>
    <Category2/>
    <Services/>
    <Banner data={BannerData} />
    <Products/>
    <Banner data={BannerData2} />
    <Blogs/>
  </div>;
};

export default App;