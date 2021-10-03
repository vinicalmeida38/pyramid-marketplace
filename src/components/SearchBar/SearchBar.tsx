import React, { useState } from "react";
import "./SearchBar.css";
import axios from "axios";
import { Search } from "react-feather";
import { useHistory } from "react-router-dom";
import { SEARCH_BAR_PLACEHOLDER } from "../../assets/constants";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const history = useHistory();

  const handleSearch = (query: String) => {
    axios
      .get(`/api/products/search?q=${query}`)
      .then((res) => {
        history.push({
          pathname: `/search?q=${query}`,
          state: res.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="header-pyramid__search-container">
      <input
        className="header-pyramid__search-bar"
        type="text"
        placeholder={SEARCH_BAR_PLACEHOLDER}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="header-pyramid__search-btn"
        onClick={() => handleSearch(search)}
      >
        <Search color="#F94F35" />
      </button>
    </div>
  );
};

export default SearchBar;
