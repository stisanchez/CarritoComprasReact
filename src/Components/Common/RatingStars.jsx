import React from 'react'
import StarSVG from './StarSVG';

export default function RatingStars({rate}) {
  const totalStars = 5;
  const fullStars = Math.floor(rate);
  const hasHalfStar = rate % 1 >= 0.5;

  return (
    <div className="rating">
      {[...Array(totalStars)].map((_, index) => {
        if (index < fullStars) {
          return <StarSVG key={index} fill="#FFD700" />;
        } else if (index === fullStars && hasHalfStar) {
          return <StarSVG key={index} isHalf={true} />;
        } else {
          return <StarSVG key={index} fill="#ccc" />;
        }
      })}
    </div>
  )
}
