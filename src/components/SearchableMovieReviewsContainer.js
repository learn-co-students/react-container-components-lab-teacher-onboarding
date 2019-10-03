import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'ynEb4DdhDdgWiGAfAp13JEbmqNOfpSiU';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
let query_url;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: ""
    };
    
    handleSubmit = (event) => {
        event.preventDefault();
        query_url = URL + `query=${this.state.searchTerm}&api-key=${NYT_API_KEY}`;
        fetch(query_url)
            .then(response => response.json())
            .then(json => this.setState({ reviews: json.results }));
    };

    handleChange = (event) => {
        this.state.searchTerm = event.target.value;
    };

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                            Enter a Search Term:
                            <input 
                            id="term" 
                            name="term" 
                            type="text"
                            onChange={this.handleChange}
                            />
                        </label>
                    </div>
                    <div>
                        <button type="submit">Search Reviews</button>
                    </div>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    };
};

export default SearchableMovieReviewsContainer;