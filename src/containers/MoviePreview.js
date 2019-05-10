import React, { Component } from 'react';

class MoviePreview extends Component {


  render() {
    
    if(this.props.movie) {
        let image = `https://image.tmdb.org/t/p/w500${this.props.movie.poster_path}`;
        return(
            <div className='movie-preview'>
                <h4>{this.props.movie.title}</h4>
                <img src={image} alt={this.props.movie.title} height='75%'/>
            </div>
        )
    }

    return(
      <div>
        <p>second one</p>
      </div>
    )
  }
}

export default MoviePreview;