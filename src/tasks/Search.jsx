import React, { useState } from "react";

const Search = () => {
  const [list, setList] = useState([
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
    "Kiwi",
    "Lemon",
    "Mango",
    "Nectarine",
    "Orange",
    "Papaya",
    "Quince",
    "Raspberry",
    "Strawberry",
    "Tomato",
  ]);
  const [search, setSearch] = useState("");
  let searchResult = list.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        className="border-black border-2 rounded-md text-center"
        placeholder="Search Fruit"
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {searchResult.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
