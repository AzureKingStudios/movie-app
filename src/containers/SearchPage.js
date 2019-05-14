import React, { Component } from 'react';
import Searchbar from './Searchbar';
import Header from './Header';
import SearchResults from './SearchResults';
import Axios from 'axios';

class SearchPage extends Component {

    state = {
        results: [],
        query: ''
    }

    getSearchResults = (qs) => {
      let url = `https://api.themoviedb.org/3/search/movie?query=${qs}&api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`;
      //updated the state with the new query string and search results
      Axios.get(url).then((res) => {
          this.setState({
            results: res.data.results,
            query: qs
          });
      }).catch((error) => {
          console.log('catch', error);
      })
    }
      
      render() {
        let qs = this.props.location.search;
        qs = qs.replace('?', '');
        //checks to see if the query string has been updated
        if(this.state.query !== qs) {
          this.getSearchResults(qs);
        }
    return(
      <div>
        <Header/>
        <h1>Search Page</h1>
        <Searchbar {...this.props}/>
        <SearchResults results={this.state.results}/>
      </div>
    )
  }
}

export default SearchPage;