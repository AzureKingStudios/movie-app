import React, { Component } from 'react';
import Axios from 'axios';
import MoviePreview from './MoviePreview.js';

class MainPage extends Component {

    state = {
      movie: 'orange',
      popular: [],
      upcoming: []
    }

    getMovie = (movieID) => {
        let url = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`;

        Axios.get(url).then((res) => {
            this.setState({movie: res.data});
        }).catch((error) => {
            console.log('catch', error);
        })
    }

    getPopMovies = (category) => {
        let url = `https://api.themoviedb.org/3/movie/${category}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`;

        Axios.get(url).then((res) => {
          this.setState({[category]: res.data.results});  
        }).catch((error) => {
          console.log(error);
        })
    }

    componentDidMount(){
      this.getMovie('124905');
      this.getPopMovies('popular');
      this.getPopMovies('upcoming');
    }
    //todo: fix pop movies titles length
  render() {
    //the list of the popular movies
    const popMovies = this.state.popular.map((movie) =>
      <MoviePreview key={movie.id} movie={movie}/>
    );
    
    const upcomingMovies = this.state.upcoming.map((movie) =>
      <MoviePreview key={movie.id} movie={movie}/>
    );
    return(
      <div>
        <h1>Main Page</h1>
        <h3>Popular Movies</h3>
        <div className='pop-movies'>
          {popMovies}
        </div>
        <h3>Upcoming Movies</h3>
        <div className='pop-movies'>
          {upcomingMovies}
        </div>
      </div>
    )
  }
}

export default MainPage;