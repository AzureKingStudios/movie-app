import React ,{Component} from 'react';
import MoviePreview from './MoviePreview.js'

class SearchResults extends Component {

    render() {
        const results = this.props.results.map((movie) => 
            <MoviePreview key={movie.id} movie={movie}/>
        )
        return(
            <div className='movie-results'>
                {results}
            </div>
        )
    }
}

export default SearchResults;