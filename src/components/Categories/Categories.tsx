import React from "react";
import "./Categories.css";
import axios from "axios";
import { useHistory } from "react-router";
import { ICategoriesComponent } from "./Categories.d";

const Categories = ({ categories }: ICategoriesComponent) => {
  const history = useHistory();

  const handleCategory = (category: String) => {
    axios.get(`/api/products/category?q=${category}`).then((res) => {
      if (res.status === 200) {
        history.push({
          pathname: `/search?q=${category}`,
          state: res.data,
        });
      }
    });
  };

  return (
    <div className="header-categories">
      <div>
        <ul className="header-categories__menu">
          {categories.map((category, index) => {
            return (
              <li key={index} onClick={() => handleCategory(category.query)}>
                {category.label}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
