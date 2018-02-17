import React from 'react';
import Data from './Data.js'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collegeInput: '',
     // alumniArray: []
    }
    this.search = this.search.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onChange (e) {
    this.setState({
      collegeInput: e.target.value
    });
  }

  search() {
    // console.log('searchbar', event.target.value);
    this.props.onSearch(this.state.collegeInput);
  }
  
  handleChange(event) {
    // console.log('searchbar', event.target.value);
    this.setState({collegeInput: event.target.value});
  }

  render() {
    return (<div>
      <h1>NBA Alumni Tracker</h1>
      Search a university! <input value={this.state.collegeInputs} onChange={this.handleChange}/>       
      <button onClick={this.search}> Submit! </button>
      {/* <ul>{this.state.alumniArray}</ul> */}
    </div>) 
  }
}

export default Search;