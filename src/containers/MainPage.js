import React, { Component } from 'react';
import Axios from 'axios';
import MoviePreview from './MoviePreview.js';
import Searchbar from './Searchbar.js';
import ScrollTopButton from './ScrollTopButton';
import Header from './Header.js';

class MainPage extends Component {

    state = {
      popular: [],
      upcoming: [],
      top_rated: []
    }

    getMovies = (category) => {
        let url = `https://api.themoviedb.org/3/movie/${category}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`;

        Axios.get(url).then((res) => {
          this.setState({[category]: res.data.results});  
        }).catch((error) => {
          console.log(error);
        })
    }

    componentDidMount(){
      this.getMovies('popular');
      this.getMovies('upcoming');
      this.getMovies('top_rated');
    }
    
  render() {
    //the list of the popular movies
    const popMovies = this.state.popular.map((movie) =>
    <MoviePreview {...this.props} key={movie.id} movie={movie}/>
    );
    
    //the list of the upcoming movies
    const upcomingMovies = this.state.upcoming.map((movie) =>
      <MoviePreview {...this.props} key={movie.id} movie={movie}/>
    );

    //the list of the top rated movies
    const topRatedMovies = this.state.top_rated.map((movie) =>
      <MoviePreview {...this.props} key={movie.id} movie={movie}/>
    );
    return(
      <div>
        <Header/>
        <Searchbar {...this.props}/>
        <h3>Popular Movies</h3>
        <div className='pop-movies'>
          {popMovies}
        </div>
        <h3>Upcoming Movies</h3>
        <div className='pop-movies'>
          {upcomingMovies}
        </div>
        <h3>Top Rated Movies</h3>
        <div className='pop-movies'>
          {topRatedMovies}
        </div>
        {/* <button className='top-scroll-btn'>Top</button> */}
        <ScrollTopButton/>
      </div>
    )
  }
}

export default MainPage;