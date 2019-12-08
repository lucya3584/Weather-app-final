import React from 'react';

import '../styles/forecast-detail.scss';
import moment from 'moment';
import PropTypes from 'prop-types';

class ForecastDetails extends React.Component {
  render() {
    return (
      (
<div className="forecast-details">
      <span className='finalDate'>{moment(this.props.forecast.date).format('ddd Do MMM')}</span>
      <span className='maxTemp'>Max temp: {this.props.forecast.temperature.max}</span>
      <span className='minTemp'>Min temp: {this.props.forecast.temperature.min}</span>
      <span className='windSpeed'>Wind Speed: {this.props.forecast.wind.speed} mph	</span>
      <span className='windDirection'>Wind Direction: {this.props.forecast.wind.direction}</span>
      <span className='humidity'>Humidity: {this.props.forecast.humidity}</span>
    </div>
)
    );
  }
}
ForecastDetails.propTypes = {
  detailedDate: PropTypes.array.isRequired,
  maxTemp: PropTypes.number.isRequired,
  minTemp: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  windSpeed: PropTypes.number.isRequired,
  windDirectionx: PropTypes.number.isRequired,
};

export default ForecastDetails;
