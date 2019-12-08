import React from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecast-details';
import '../styles/app.scss';
import '../styles/forecast-summaries.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: 0,
      forecasts: [],
      location: {
        city: '',
        country: '',
      },
      background: '',
    };
    this.handleForecastSelector = this.handleForecastSelector.bind(this);
  }

  handleForecastSelector(date) {
    this.setState({
      selectedDate: date,
    });
  }

  componentDidMount() {
    Axios.get(`https://mcr-codes-weather.herokuapp.com/forecast`).then(response => {
      this.setState({
        forecasts: response.data.forecasts,
        location: {
          city: response.data.location.city,
          country: response.data.location.country,
        },
      });
    });
  }

  getCity = (e, city) => {
    e.preventDefault();

    Axios.get(`https://mcr-codes-weather.herokuapp.com/forecast?city=${city}`).then(response => {
      this.setState({
        location: {
          city: response.data.location.city,
          country: response.data.location.country,
        },
        forecasts: response.data.forecasts,
      });
    });
  };

  render() {
    const selectedForecast = this.state.forecasts.find(
      forecast => forecast.date === this.state.selectedDate,
    );

    return (
      <div>
        <LocationDetails city={this.state.location.city} country={this.props.location.country} />

        <ForecastSummaries
          forecasts={this.state.forecasts}
onForecastSelect={this.handleForecastSelector}
        />
        {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
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

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  forecasts: PropTypes.array.isRequired,
};

export default App;
