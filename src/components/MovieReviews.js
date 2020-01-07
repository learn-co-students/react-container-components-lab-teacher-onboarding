import React from "react";

export default props => {
  return (
    <div className="review-list">
      {props.reviews.map(review => (
        <div key={review.display_title} className="review">{review.display_title}</div>
      ))}
    </div>
  );
};
