import React, { useState } from "react";

export default function StarRating() {
  const [rating, setRating] = useState(0); // Final selected rating
  const [hover, setHover] = useState(0); // Hover preview

  return (
    <div className="flex space-x-1">
      {Array.from({ length: 5 }, (_, i) => {
        const starValue = i + 1;
        const isActive = starValue <= (hover || rating);

        return (
          <span
            key={i}
            className={`text-3xl cursor-pointer transition-colors duration-150 ${
              isActive ? "text-yellow-500" : "text-gray-400"
            }`}
            onClick={() => setRating(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
          >
            {isActive ? "★" : "☆"}
          </span>
        );
      })}
    </div>
  );
}
