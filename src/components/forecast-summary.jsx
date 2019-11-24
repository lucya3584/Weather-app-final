import React from 'react';
import PropTypes from 'prop-types';

const ForecastSummary = props => (
  <div>
    <span className="forecast-date">
      {props.date},</span>
    <span className="forecast-temperature">
      {props.temperature},</span>
    <span className="forecast-description">
      {props.description},</span>
    <span className="forecast-icon">
      {props.icon},</span>
  </div>
);

ForecastSummary.propTypes = {
  forecasts: PropTypes.shape({
    date: PropTypes.string.isRequired,
    temperate: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ForecastSummary;
