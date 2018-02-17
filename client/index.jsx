import React from 'react';
import ReactDOM from 'react-dom';
// import nba from 'nba.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value)
    this.setState({userInput: event.target.value});
  }
  render() {
    return(
      <div>
        <div className="app">
          NBA Player Scramble
        </div>
        <label>
          <textarea value = {this.state.userInput} onChange={this.handleChange} />
        </label>
        <div>sampleword</div> 
        {/* <input type="text"/> */}
        <button type="button">Submit!</button>
        </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));