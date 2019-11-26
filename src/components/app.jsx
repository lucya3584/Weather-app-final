import React from 'react';
import LocationDetails from './location-details';
import ForecastSummary from './forecast-summary';
import PropTypes from 'prop-types';

const App = props => (
  <div>
    <LocationDetails city={props.location.city}
      country={props.location.country} />
  </div>
  <div>
    <ForecastSummary
      date={props.forecast.date}
      temperature={props.forecast.temperature}
      description={props.forecast.description}
      icon={props.forecast.icon} />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

export default App;
