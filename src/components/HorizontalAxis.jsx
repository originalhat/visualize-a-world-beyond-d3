import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class HorizontalAxis extends Component {
  static propTypes = {
    horizontalTicks: PropTypes.array.isRequired,
    width: PropTypes.number.isRequired,
  };

  render() {
    return (
      <div className="x-axis" style={{WIDTH: `${this.props.width}px`}}>
        {this.props.horizontalTicks.map((v, i) => <div key={i} data-value={v}/>)}
      </div>
    );
  }
}

export default HorizontalAxis;
