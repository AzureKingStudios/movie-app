import React, { Component } from 'react';
import Axios from 'axios';

class SearchPage extends Component {

    state = {
        results: []
    }

    componentDidMount() {
        // const query = new URLSearchParams(this.props.location.search);
        // const token = query.get('token')
        // console.log(token)//123
        let qs = this.props.location.search;
        qs = qs.replace('?', '');
        console.log(qs);

        let url = `https://api.themoviedb.org/3/search/movie?query=${qs}&api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`;

        Axios.get(url).then((res) => {
            this.setState({results: res.data.results});
        }).catch((error) => {
            console.log('catch', error);
        })
    }

  render() {
      console.log(this.state.results)
    return(
      <div>
        <h1>Search Page</h1>
      </div>
    )
  }
}

export default SearchPage;