import React from 'react';
import { shallow } from 'enzyme';
import ForecastSummary from '../components/forecast-summary';
import ForecastSummaries from '../components/forecast-summaries';

it('renders the date', () => {
  const wrapper = shallow(
    <ForecastSummary
      date="mockDate"
      temperature="mockTemperature"
      description="mockDescription"
      icon="mockIcon"
    />,
  );

  expect(wrapper.find('.date').text()).toEqual('mockDate');
});

it('renders the temperature', () => {
  const wrapper = shallow(
    <ForecastSummary
      date="mockDate"
      temperature="mockTemperature"
      description="mockDescription"
      icon="mockIcon"
    />,
  );

  expect(wrapper.find('.temperature').text()).toEqual('mockTemperature');
});

it('renders the description', () => {
  const wrapper = shallow(
    <ForecastSummary
      date="mockDate"
      temperature="mockTemperature"
      description="mockDescription"
      icon="mockIcon"
    />,
  );

  expect(wrapper.find('.description').text()).toEqual('mockDescription');
});

it('renders the icon', () => {
  const wrapper = shallow(
    <ForecastSummary
      date="mockDate"
      temperature="mockTemperature"
      description="mockDescription"
      icon="mockIcon"
    />,
  );

  expect(wrapper.find('.icon').text()).toEqual('mockIcon');
});

it('passes the correct values from each forecast into each ForecastSummary'), () => {
  const wrapper = Enzymes.shallow((
    <ForecastSummaries forecasts={forecasts} />
  ));
  wrapper.find(ForecastSummary).forEach((node, index) => {
    expect(node.prop('date')).toEqual(forecasts[index].date);
    expect(node.prop('description')).toEqual(forecasts[index].description);
    expect(node.prop('icon')).toEqual(forecasts[index].icon);
    expect(node.prop('temperature')).toEqual(forecasts[index].temperature.max);
  });
});