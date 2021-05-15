import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;


export default class SearchableMovieReviewsContainer extends Component {
    
    state = {
        reviews: [],
        searchTerm: ""
    }

    handleChange = (e) => {
        this.setState({searchTerm: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault;
        fetch(URL.concat(this.state.searchTerm))
        .then(res => res.json())
        .then(data => this.setState({reviews: data.results}))
    }
    
    render() {
        return (
            <div className="seachable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input type="search" onChange={this.handleChange}/>
                    <button type="submit">Search</button>
                </form>
                {this.state.reviews && this.state.searchTerm}
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}
