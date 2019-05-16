import React, {Component} from 'react';
import Header from './Header.js';
import Axios from 'axios';

class MovieDetails extends Component {
    state = {
        movie: {}
    }

    getMovie = (movieID) => {
        let url = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`;

        Axios.get(url).then((res) => {
            this.setState({movie: res.data});
        }).catch((error) => {
            console.log('catch', error);
        })
    }

    render() {
        
        let movie = this.state.movie;

        let movieID = this.props.match.params.id;
        
        // movieID is parsed to an int so that movie id and qs can be compared
        movieID = parseInt(movieID);
        //checks to see if the query string has been updated
        if(movie.id !== movieID) {
            this.getMovie(movieID);
        }
        
        if(typeof movie.id === 'undefined') {
            return(
                <div>nothing here yet</div>
            )
        }

        let image = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

        return(
            <div>
                <Header/>
                <div className='movie-details'>
                    <img className='movie-detail-img' src={image} alt={movie.title}/>
                    <div className='movie-info'>
                        <h2>{movie.title}</h2>
                        <p>{movie.overview}</p>
                        <p>Runtime: {movie.runtime} minutes</p>
                        <p>Release Date: {movie.release_date}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieDetails;