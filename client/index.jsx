import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './Search.jsx';
import axios from 'axios';
import FilteredAlumni from './FilteredAlumni.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collegeInput: '',
      filteredAlumni: []
    }
    this.handleChange = this.handleChange.bind(this);
    // this.sendQuery = this.sendQuery.bind(this);
    // this.sendSubmit = this.sendSubmit.bind(this);
  }
  search (term) {
    console.log(`Unversity Search Bar: ', ${term}`);
    axios.post("/FilteredAlumni", {college: `${term}`})
    .then(() => {
      return axios.get('/FilteredAlumni');
    })
    .then((response) => {
      this.setState({
        FilteredAlumni: repsonse.data
      });
    });
  }

  handleChange(event) {
    console.log('textarea', event.target.value)
    this.setState({collegeInput: event.target.value});
  }


  render() {
    return(
      <div>
        <div className="app">
          NBA Alumni Tracker
        </div>
        <label>
          <textarea value={this.state.collegeInput} onChange={this.handleChange} />
        </label>
        <Search onSearch={this.search.bind(this)}/>
        <FilteredAlumni filteredAlumni={this.state.filteredAlumni}/>
        </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));