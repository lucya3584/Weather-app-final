import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';

const ForecastSummary = props => (
  <div>
    <div className="forecast-summary_icon">
      <WeatherIcon name="owm" iconId={props.icon} />
    </div>

    <div>
      <span className="date">{props.date}</span>
      <span className="temperature">{props.temperature}</span>
      <span className="description">{props.description}</span>
      <span className="icon">{props.icon}</span>
    </div>

    <div className="forecast-summary_date">
      <span>{moment(props.date).format('ddd Do MMM')}</span>
    </div>
  </div>
);

ForecastSummary.propTypes = {
  forecasts: PropTypes.shape({
    date: PropTypes.number.isRequired,
    temperate: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ForecastSummary;
