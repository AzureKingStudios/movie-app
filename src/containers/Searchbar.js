import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Searchbar extends Component {

  state = {
    value: ''
  }

  handleChange = (event) => {
      this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
      alert('A search was made ' + this.state.value);
      event.preventDefault();
      this.props.history.push(`/search?${this.state.value}`)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} required />
            <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Searchbar;