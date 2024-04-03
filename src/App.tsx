import React from "react";
// import "./App.css";

import AutoCompleteSelect from "./components/AutoCompleteSelect";
import AsyncAutoCompleteSelect from "./components/AsyncAutoCompleteSelect";

const options = [
  { label: "Chocolate Cake", value: "chocolate-cake" },
  { label: "Red Velvet Cake", value: "red-velvet-cake" },
  { label: "Vanilla Cake", value: "vanilla-cake" },
  { label: "Cheesecake", value: "cheesecake" },
  { label: "Coffee Cake", value: "coffee-cake" },
  { label: "Banana Cake", value: "banana-cake" },
  { label: "Funfetti Cake", value: "funfetti-cake" },
  { label: "Pineapple Cake", value: "pineapple-cake" },
];

const rainbowOptions = [
  { label: "Red", value: "red" },
  { label: "Orange", value: "orange" },
  { label: "Yellow", value: "yellow" },
  { label: "Green", value: "green" },
  { label: "Blue", value: "blue" },
  { label: "Indigo", value: "indigo" },
  { label: "Violet", value: "violet" },
];

function App() {
  return (
    <div className="App">
      <h2>Async Select option</h2>
      <AsyncAutoCompleteSelect />
      <br />
      <hr />
      <br />
      <br />
      <br />

      <AutoCompleteSelect
        id="single-select"
        label="Single select option"
        placeholder="Pick your favourite Rainbow color"
        options={rainbowOptions}
        onSelect={console.log}
      />

      <br />
      <br />
      <br />
      <br />

      <AutoCompleteSelect
        id="multi-select"
        label="Multi select option"
        placeholder="Search your cake choices"
        options={options}
        onSelect={console.log}
        multi
      />
    </div>
  );
}

export default App;
