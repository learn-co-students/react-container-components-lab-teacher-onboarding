import React from 'react'

export default ({ reviews }) =>
  <ul className="review-list">
    {reviews.map((movie) =>
     <li className="review" key={movie.display_title} >{movie.display_title} - {movie.summary_short}</li>
    )}
  </ul>


