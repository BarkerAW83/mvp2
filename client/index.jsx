import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  render() {
    return (
        <div> 
            <div className="app">
                MVP Redux
            </div> 
        </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));