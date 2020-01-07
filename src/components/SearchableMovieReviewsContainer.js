import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "NoRnELpaS8KSvgR0WvLRPqiN4CD2q9cJ";
// const URL =
//   "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
//   `api-key=${NYT_API_KEY}`;
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = { reviews: [], searchTerm: "" };
  }

  handleSubmit = e => {
    e.preventDefault();
    fetch(URL).then(res=>res.json()).then(json => console.log(json))
  };

  handleChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.searchTerm}
          ></input>
          <button type="submit">Search</button>
        </form>
        <MovieReviews reviews={this.state.reviews}></MovieReviews>
      </div>
    );
  }
}
