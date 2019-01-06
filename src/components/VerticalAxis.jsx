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
        {
          this.props.verticalTicks.map((v, i) => {
              return (
                <div key={i} data-value={Number.parseFloat(v).toFixed(2)}/>
              )
            }
          )
        }
      </div>);
  }
}

export default VerticalAxis;
