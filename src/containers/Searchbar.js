import React, { Component } from 'react';

class Searchbar extends Component {

  state = {
    value: ''
  }

  handleChange = (event) => {
      this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
      event.preventDefault();
      this.props.history.push(`/search?${this.state.value}`)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} required />
            <input type="submit" value="Search" />
        </form>
      </div>
    )
  }
}

export default Searchbar;