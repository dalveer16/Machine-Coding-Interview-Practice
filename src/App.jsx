import { useState } from "react";
import StarRating from "./tasks/StarRating";
import Search from "./tasks/Search";

function App() {
  return (
    <div className="flex h-screen justify-center items-center">
      {/* <StarRating /> */}
      <Search />
    </div>
  );
}

export default App;
