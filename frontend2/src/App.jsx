import React from "react";
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/hero.jsx';
import Category from "./components/Category/Category.jsx";

const App = () => {
  return <div>
    <Navbar/>
    <Hero/>
    <Category/>
  </div>;
};

export default App;