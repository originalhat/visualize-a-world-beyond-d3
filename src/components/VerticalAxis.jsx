import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class VerticalAxis extends Component {
  static propTypes = {
    verticalTicks: PropTypes.array.isRequired,
  };

  render() {
    return (
      <div className="y-axis">
        {this.props.verticalTicks.map((v, i) => <div key={i} data-value={v}/>)}
      </div>    );
  }
}

export default VerticalAxis;
