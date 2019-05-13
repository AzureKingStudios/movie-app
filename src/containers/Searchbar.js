import React, { Component } from 'react';

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
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Searchbar;