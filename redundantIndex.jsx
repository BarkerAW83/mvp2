import React from 'react';
import ReactDOM from 'react-dom';
import { data, stats } from 'nba.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  changeDisplay(e){
    this.setState(
        data: [];//not sure about this
    )
  }

  render() {
    return
    (
        <div className="app">
          NBA Player Scramble
        </div> 
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));