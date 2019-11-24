import React from 'react';
import LocationDetails from './location-details';
import ForecastSummary from './forecast-summary';

const App = props => (
  <LocationDetails
    city={props.location.city} country={props.location.country}
  />
  <ForecastSummary
    date={props.forecast.date} temperature={props.forecast.temperature}
    description={props.forecast.description} icon={props.forecast.icon}
  />
);

export default App;
