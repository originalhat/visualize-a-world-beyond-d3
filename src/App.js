import React, {Component} from 'react';
import './App.css';
import LineSeries from "./components/LineSeries";

function getRndData(numberOfPoints) {
  return Array.from({length: numberOfPoints}, (_, x) => {
    return {x: x, y: Math.floor(Math.random() * 1000)}
  });
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        getRndData(30),
        getRndData(30),
        getRndData(30),
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <h1>charting sans d3</h1>
        <div className="Panel">
          <LineSeries data={this.state.data} initialHeight={300} initialWidth={800}/>
        </div>
      </div>
    );
  }
}

export default App;
