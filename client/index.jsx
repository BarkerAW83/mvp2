import React from 'react';
import ReactDOM from 'react-dom';
// import nba from 'nba.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  //onClick

  render() {
    return(
      <div>
        <div className="app">
          NBA Player Scramble
        </div> 
        <input type="text"/>
        <button type="button">Submit!</button>
        </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));