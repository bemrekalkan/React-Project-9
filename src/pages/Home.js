import React from "react";
import Categories from "../components/categories/Categories";
import Header from "../components/header/Header";
import Menus from "../components/menus/Menus";
import data from "../helper/data";

//! with Set() method we take just 3 categories 👇
//! with spread (...) we spread out these 3 categories 👇
const allCategories = [...new Set(data.map((item) => item.category))];

const Home = () => {
  return (
    <div>
      <Header />
      <Categories allCategories={allCategories} />
      <Menus />
    </div>
  );
};

export default Home;
