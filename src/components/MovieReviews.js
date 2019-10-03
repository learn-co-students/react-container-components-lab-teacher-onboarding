// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) => {
    return (
        <div className="review-list">
            <ul>
            {props.reviews.map(review => 
                <li><div className="review">
                    <img src={review.multimedia.src} alt={review.headline}></img>
                    <h3>{review.headline}, {review.byline}</h3>
                    <p>{review.summary_short}</p>
                </div></li>)
            }
            </ul>
        </div>
    )};

export default MovieReviews;
