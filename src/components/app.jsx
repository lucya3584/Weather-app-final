import React from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './location-details';
import ForecastSummary from './forecast-summary';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecast-details';
import '../styles/app.scss';
import '../styles/forecast-summaries.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: this.props.forecasts[0].date,
    };
  }

  render() {
    const selectedForecast = this.props.forecasts.find(
      forecast => forecast.date === this.state.selectedDate,
    );

    return (
      <div>
        <LocationDetails city={this.props.location.city} country={this.props.location.country} />

        <ForecastSummaries forecasts={this.props.forecasts} />

        <ForecastDetails forecast={selectedForecast} />
      </div>
    );
  }
}

// const App = props => (
//   <div className="forecast">
//     <LocationDetails city={props.location.city} country={props.location.country} />

//     {/* <ForecastSummary
//       date={props.forecasts.date}
//       temperature={props.forecasts.temperature}
//       description={props.forecasts.description}
//       icon={props.forecasts.icon}
//     /> */}

//     <ForecastSummaries forecasts={props.forecasts} />
//     <ForecastDetails forecast={props.forecasts[0]} />
//   </div>
// );

// App.propTypes = {
//   location: PropTypes.shape({
//     city: PropTypes.string,
//     country: PropTypes.string,
//   }).isRequired,
//   forecasts: PropTypes.array.isRequired,
// };

export default App;
