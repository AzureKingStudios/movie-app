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
        
        
        let qs = this.props.location.search;
        qs = qs.replace('?', '');
        //qs is parsed to an int so that movie id and qs can be compared
        qs = parseInt(qs);
        //checks to see if the query string has been updated
        if(this.state.movie.id !== qs) {
            this.getMovie(qs);
        }
        
        console.log('state2',this.state.movie);
        
        if(typeof this.state.movie.id === 'undefined') {
            return(
                <div>nothing here yet</div>
            )
        }

        return(
            <div>
                <Header/>
                movie details
            </div>
        )
    }
}

export default MovieDetails;