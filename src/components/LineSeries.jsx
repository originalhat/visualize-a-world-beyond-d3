import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import HorizontalAxis from "./HorizontalAxis";
import VerticalAxis from "./VerticalAxis";
import Line from "./Line";

class LineSeries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0
    };

    this.lineChart = React.createRef()
  }

  static propTypes = {
    height: PropTypes.number.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.arrayOf(
        PropTypes.shape({
          x: PropTypes.number,
          y: PropTypes.number
        })
      )
    ).isRequired
  };

  componentDidMount() {
    this._resizeSeries();
    window.addEventListener("resize", this._resizeSeries.bind(this));
  }

  _resizeSeries() {
    const LEFT_AXIS_OFFSET = 40;
    this.setState({width: this.lineChart.clientWidth - LEFT_AXIS_OFFSET});
  }

  render() {
    let WIDTH = this.state.width;
    let HEIGHT = this.props.height;
    let TICK_COUNT = 6;

    let MAX_X = Math.max(...[].concat.apply([], this.props.data).map(v => v.x));
    let MAX_Y = Math.max(...[].concat.apply([], this.props.data).map(v => v.y));

    let x_ticks = this._getTicks(TICK_COUNT, MAX_X);
    let y_ticks = this._getTicks(TICK_COUNT, MAX_Y).reverse();

    return (
      <div className="LineSeries" ref={(ref) => this.lineChart = ref}>
        <svg height={HEIGHT} width={this.state.width} viewBox={`0 0 ${this.state.width} 300`}>
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
