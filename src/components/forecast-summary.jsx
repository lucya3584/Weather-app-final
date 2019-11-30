import React from 'react';
import PropTypes from 'prop-types';

const ForecastSummary = props => (
  <div className="forecast-summary">
    <span className="date">{props.date}</span>
    <span className="temperature">{props.temperature}</span>
    <span className="description">{props.description}</span>
    <span className="icon">{props.icon}</span>
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
