// Code MovieReviews Here
import React, { Component } from 'react'

export default props => {
  return <div className="review-list">
    <ul>
      {props.reviews.map(createReviewElement)}
    </ul>
  </div>
}

function createReviewElement(review){
  return <li className="review" key={review.headline}>
    <span>{review.headline}</span>
  </li>
}
