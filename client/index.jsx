import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './Search.jsx';
import axios from 'axios';
import Data from './Data.js'
//const url = 'http://data.nba.net/10s/prod/v1/2017/players.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collegeInput: '',
      alumniArray: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
  }
  search (term) {
    this.state.alumniArray = [];
    for (var i = 0; i < Data.league.standard.length; i++){
      if (Data.league.standard[i]['collegeName'] === term){
        console.log(Data.league.standard[i]['firstName'] + ' ' + Data.league.standard[i]['lastName'])
        // this.state.alumniArray.push(Data.league.standard[i]['firstName'] + ' ' + Data.league.standard[i]['lastName'])
        this.state.alumniArray.push(<li>{Data.league.standard[i]['firstName'] + ' ' + Data.league.standard[i]['lastName']}</li>)
      }
    }
    console.log(this.state.alumniArray)
    this.setState({
      alumniArray: this.state.alumniArray
    })
  }

  handleChange(event) {
    // console.log('textarea', event.target.value)
    this.setState({collegeInput: event.target.value});
  }

  render() {
    console.log('JLKJDLFKJSLKDJFLKDSJLKFJSDLKFJDS', this.state);
    return(
      <div>
        <div className="app">
          <Search onSearch={this.search.bind(this)}/>
        </div>
        <ul>{this.state.alumniArray}</ul>
        <label>
          {/* <textarea value={this.state.collegeInput} onChange={this.handleChange} /> */}
        </label>
        
        </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));