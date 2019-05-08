import React, { Component } from 'react';
import Axios from 'axios';

class MainPage extends Component {

    state = {
      movie: 'orange',
      popMovies: []
    }

    getMovie = (movieID) => {
        let url = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`;

        Axios.get(url).then((res) => {
            this.setState({movie: res.data});
        }).catch((error) => {
            console.log('catch', error);
        })
    }

    getPopMovies = () => {
        let url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`;

        Axios.get(url).then((res) => {
          this.setState({popMovies: res.data.results});  
        }).catch((error) => {
          console.log(error);
        })
    }

    componentDidMount(){
      this.getMovie('124905');
      this.getPopMovies();
    }
    //todo: add pop movies jsx
  render() {
    return(
      <div>
        <h1>Main Page</h1>
      </div>
    )
  }
}

export default MainPage;