import React from 'react';
import PropTypes from 'prop-types';

const ForecastSummary = props => (
  <div>
    <span className="forecast-date">
      {props.date}</span>
    <span>{props.temperature}</span>
    <span>{props.description}</span>
    <span>{props.icon}</span>
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
