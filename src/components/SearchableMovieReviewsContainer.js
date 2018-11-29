import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?`

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
  state ={
    reviews: [],
    searchTerm: ""
  }

  handleChange = (event) =>{
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(`${URL}query=${this.state.searchTerm}&api-key=${NYT_API_KEY}`)
      .then(resp => resp.json())
      .then(data => {
        this.setState({reviews: data.results})
    })
  }


  render() {
    return(
      <div className="searchable-movie-reviews">
        <h1>Searched Movies</h1>
        <form onSubmit={this.handleSubmit} >
          <input onChange={this.handleChange} type="text"/>
          <input type="submit" value="submit"/>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
