import React from 'react';
import '../styles/app.scss';
import '../styles/forecast-summaries.scss';
import moment from 'moment';
import PropTypes from 'prop-types';

class ForecastDetails extends React.Component {
  render() {
    return <div className="forecast-details">
      <span className='finalDate'>{moment(this.props.forecast.date).format('ddd Do MMM')}</span>
      <span className='maxTemp'>Max temp: {this.props.forecast.temperature.max} degrees</span>
      <span className='minTemp'>Min temp: {this.props.forecast.temperature.min} degrees</span>
      <span className='windSpeed'>Wind Speed: {this.props.forecast.wind.speed} mph	</span>
      <span className='windDirection'>Wind Direction: {this.props.forecast.wind.direction}</span>
      <span className='humidity'>Humidity: {this.props.forecast.humidity}</span>
    </div>;

  }
};



export default ForecastDetails;
