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
        getRndData(60),
        getRndData(60),
        getRndData(60),
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <LineSeries data={this.state.data}/>
      </div>
    );
  }
}

export default App;
