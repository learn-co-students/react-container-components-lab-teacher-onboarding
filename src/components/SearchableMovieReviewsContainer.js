import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dpJrxjqRKmqWJcS4x6n6AVM03NqSZMMR';

function buildUrl(searchTerm){
  return `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${searchTerm}&api-key=${NYT_API_KEY}`;
}


// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ""
  }
  search = event => {
    event.preventDefault()
    fetch(buildUrl(this.state.searchTerm))
      .then(response => response.json())
      .then(reviews => {
        this.setState({ reviews: reviews.results })
      })
  }
  updateSearchTerm = event => {
    this.setState({searchTerm: event.target.value })
  }
  render(){
    return <div className="searchable-movie-reviews">
      <form onSubmit={this.search}>
        <input onChange={this.updateSearchTerm} value={this.state.searchTerm} />
        <input type="submit" value="Search" />
      </form>
      <MovieReviews reviews={this.state.reviews} />
    </div>
  }
}
