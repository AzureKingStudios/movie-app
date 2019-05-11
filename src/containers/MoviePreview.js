import React, { Component } from 'react';

class MoviePreview extends Component {


  render() {
    
    if(this.props.movie) {
        let movieTitle = this.props.movie.title;
        //shortens the movie title if its too long
        if(movieTitle.length > 20) {
          movieTitle = movieTitle.substring(0, 17);
          movieTitle = movieTitle + '...';
        }
        let image = `https://image.tmdb.org/t/p/w500${this.props.movie.poster_path}`;
        return(
            <div className='movie-preview'>
                <h4>{movieTitle}</h4>
                <img src={image} alt={this.props.movie.title} height='75%'/>
            </div>
        )
    }

    return(
      //An empty div is returned if no movie data was received
      <div>
      </div>
    )
  }
}

export default MoviePreview;