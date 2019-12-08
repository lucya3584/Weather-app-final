import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';
import '../styles/forecast-summaries.scss';
import '../styles/forecast-summary.scss';

class ForecastSummary extends React.Component {
  render() {
    return (
      <div className="forecast-summary">
        <span className="icon">
          <WeatherIcon name="owm" iconId={this.props.icon} flip="horizontal" rotate="90" />
        </span>
        <span className="date">{moment(this.props.date).format('ddd Do MMM')}</span>
        <span className="temperature">
{this.props.temperature}</span>
        <span className="desc">{this.props.description}</span>
        <span className="details">
          <button className="details-button" onClick={() => this.props.onSelect(this.props.date)}>
            More details
          </button>
        </span>
      </div>
    );
  }
}
ForecastSummary.propTypes = {
  forecasts: PropTypes.shape({
    date: PropTypes.number.isRequired,
    temperate: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};

export default ForecastSummary;
