import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    let WIDTH = 500;
    let HEIGHT = 300;
    let TICK_COUNT = 5;
    let MAX_X = Math.max(...this.props.data.map(d => d.x));
    let MAX_Y = Math.max(...this.props.data.map(d => d.y));

    let x = val => val / MAX_X * WIDTH;
    let y = val => HEIGHT - val / MAX_Y * HEIGHT;
    let x_ticks = this._getTicks(TICK_COUNT, MAX_X);
    let y_ticks = this._getTicks(TICK_COUNT, MAX_Y).reverse();

    let d = `M${x(this.props.data[0].x)} ${y(this.props.data[0].y)} ${this.props.data.slice(1).map(d => {
      return `L${x(d.x)} ${y(d.y)}`;
    }).join(' ')}`;

    return (
      <div className="LineChart" style={{width: `${WIDTH}px`, height: `${HEIGHT}px`}}>
        <svg width={WIDTH} height={HEIGHT}>
          <path d={d}/>
        </svg>
        <div className="x-axis">
          {x_ticks.map(v => <div data-value={v}/>)}
        </div>
        <div className="y-axis">
          {y_ticks.map(v => <div data-value={v}/>)}
        </div>
      </div>
    );
  }

  _getTicks(count, max) {
    return [...Array(count).keys()].map(d => max / (count - 1) * parseInt(d))
  }
}

export default App;
