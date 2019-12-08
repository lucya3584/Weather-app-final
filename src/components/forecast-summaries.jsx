import React from 'react';
import ForecastSummary from './forecast-summary';
import '../styles/app.scss';
import '../styles/forecast-summaries.scss';

class ForecastSummaries extends React.Component {
  render() {
    return (
      <div className="forecast-summaries">
        {this.props.forecasts.map(forecast => (
          <ForecastSummary
            key={forecast.date}
            date={forecast.date}
            description={forecast.description}
            icon={forecast.icon}
            temperature={forecast.temperature.max}
            onSelect={this.props.onForecastSelect}
          />
        ))}
      </div>
    );
  }
}
export default ForecastSummaries;
