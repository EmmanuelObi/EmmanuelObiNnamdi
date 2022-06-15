import React, { useState } from "react";
import { a } from "../sampleData";
import { cleanInputValue, pathGet } from "../utilities/helpers";
import "./SearchBar.css";

const SearchBar = ({ placeholder }) => {
  const [inputValue, setInputValue] = useState("");
  const [path, setPath] = useState("");
  const [display, setDisplay] = useState(false);

  const result = () => {
    if (path === "") {
      return " ";
    } else if (path === undefined) {
      return (
        <>
          <p>No path found</p>
        </>
      );
    } else {
      return (
        <>
          <p>Result:</p>
          <span>{path}</span>
        </>
      );
    }
  };

  const handleSearchClick = () => {
    if (inputValue === "") {
      return;
    }
    let newValue = cleanInputValue(inputValue);
    let searchResult = pathGet(a, newValue);
    if (newValue === "") {
      setPath("");
    } else {
      setPath(searchResult);
    }
    setDisplay(true);
  };

  const handleChange = (e) => {
    const searchQuery = e.target.value;
    setInputValue(searchQuery);
    if (!searchQuery) {
      setPath("");
    }
    setDisplay(false);
  };

  return (
    <div className="search">
      <div className="search-input">
        <input
          type="search"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
        />
        <div className="search-icon" onClick={handleSearchClick}>
          <p>Search</p>
        </div>
      </div>
      {display ? (
        <div className="input-result">
          <p>
            <em>{result()}</em>
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchBar;
