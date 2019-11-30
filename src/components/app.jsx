import React from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './location-details';
import ForecastSummary from './forecast-summary';
import ForecastSummaries from './forecast-summaries';

const App = props => (
  <div className="forecast">

    <LocationDetails city={props.location.city} country={props.location.country} />


    <ForecastSummary
      date={props.forecasts.date}
      temperature={props.forecasts.temperature}
      description={props.forecasts.description}
      icon={props.forecasts.icon}
    />

    <ForecastSummaries forecasts={props.forecasts} />

  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  forecasts: PropTypes.array.isRequired,
};


//   date: PropTypes.string.isRequired,
//   temperate: PropTypes.number.isRequired,
//   description: PropTypes.string.isRequired,
// }).isRequired,



export default App;
