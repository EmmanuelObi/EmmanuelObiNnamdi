import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <h1>Search Here....</h1>
      <SearchBar placeholder="E.g: Lagos, One expensive house like that, Ibori, Ikoyi, James" />
    </div>
  );
}

export default App;
