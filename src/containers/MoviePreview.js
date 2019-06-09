import React, { Component } from 'react';

class MoviePreview extends Component {

  handleClick = (movieID) => {
      
      console.log(movieID)
      this.props.history.push(`/movie/${movieID}`)
  }

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
            <div className='movie-preview' onClick={() => this.handleClick(this.props.movie.id)}>
                <h4 className='preview-title'>{movieTitle}</h4>
                <img src={image} alt={this.props.movie.title} height='100%'/>
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