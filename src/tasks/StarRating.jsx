import React, { useState } from "react";

export default function StarRating(props) {
  const limit = props.limit || 5;
  const [rating, setRating] = useState(props.rating || 2);

  function handleClick(e) {
    setRating(+e.target.getAttribute("data"));
  }

  return (
    <div onClick={handleClick} className="flex space-x-1 cursor-pointer">
      {[...new Array(limit).keys()].map((i) => (
        <span
          key={i}
          data={i + 1}
          className={`text-2xl ${
            i < rating ? "text-yellow-500" : "text-gray-400"
          }`}
        >
          {i < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}
