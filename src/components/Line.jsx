import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import {COLOR_RANGE} from "../theme";

class Line extends Component {
  static propTypes = {
    MAX_X: PropTypes.number.isRequired,
    MAX_Y: PropTypes.number.isRequired,
    HEIGHT: PropTypes.number.isRequired,
    WIDTH: PropTypes.number.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number
      })
    ).isRequired,
    lineIndex: PropTypes.number.isRequired,
  };

  render() {
    let x = val => val / this.props.MAX_X * this.props.WIDTH;
    let y = val => this.props.HEIGHT - val / this.props.MAX_Y * this.props.HEIGHT;

    let d = `M${x(this.props.data[0].x)} ${y(this.props.data[0].y)} ${this.props.data.slice(1).map(d => {
      return `L${x(d.x)} ${y(d.y)}`;
    }).join(' ')}`;

    return (
        <path d={d} style={{stroke: COLOR_RANGE[this.props.lineIndex]}}/>
    );
  }
}

export default Line;
