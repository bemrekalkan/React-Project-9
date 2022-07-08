import React from "react";
import Categories from "../components/categories/Categories";
import Header from "../components/header/Header";
import Menus from "../components/menus/Menus";
import data from "../helper/data";
import { useState } from "react";

//! with Set() method we take just 3 categories 👇
//! Firstly we send "All" then, with spread (...) we spread out these 3 categories 👇
const allCategories = ["ALL", ...new Set(data.map((item) => item.category))];

const Home = () => {
  const [menuItems, setMenuItems] = useState(data);
  return (
    <div>
      <Header />
      <Categories allCategories={allCategories} />
      <Menus menuItems={menuItems} />
    </div>
  );
};

export default Home;
