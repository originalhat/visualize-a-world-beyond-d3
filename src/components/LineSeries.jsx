import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import HorizontalAxis from "./HorizontalAxis";
import VerticalAxis from "./VerticalAxis";
import Line from "./Line";

class LineSeries extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.arrayOf(
        PropTypes.shape({
          x: PropTypes.number,
          y: PropTypes.number
        })
      )
    ).isRequired
  };

  render() {
    let WIDTH = 800;
    let HEIGHT = 300;
    let TICK_COUNT = 6;

    let MAX_X = Math.max(...[].concat.apply([], this.props.data).map(v => v.x));
    let MAX_Y = Math.max(...[].concat.apply([], this.props.data).map(v => v.y));

    let x_ticks = this._getTicks(TICK_COUNT, MAX_X);
    let y_ticks = this._getTicks(TICK_COUNT, MAX_Y).reverse();

    return (
      <div className="LineSeries" style={{WIDTH: `${WIDTH}px`, HEIGHT: `${HEIGHT}px`}}>
        <svg height={HEIGHT} width="100%" viewBox={`0 0 ${WIDTH} ${HEIGHT}`} preserveAspectRatio="none">
          {
            this.props.data.map((v, i) => {
              return (
                <Line key={i} data={v} lineIndex={i} MAX_X={MAX_X} MAX_Y={MAX_Y} HEIGHT={HEIGHT} WIDTH={WIDTH}/>
              )
            })
          }
        </svg>


        <HorizontalAxis horizontalTicks={x_ticks} width={WIDTH}/>
        <VerticalAxis verticalTicks={y_ticks}/>
      </div>
    );
  }

  _getTicks(count, max) {
    return [...Array(count).keys()].map(d => max / (count - 1) * parseInt(d))
  }
}

export default LineSeries;
