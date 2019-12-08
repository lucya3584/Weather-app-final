import React from 'react';
import PropTypes from 'prop-types';
import '../styles/location-details.scss';

const LocationDetails = props => (
  <h1 className="location-details">
    {props.city}
,
{' '}
{props.country}
  </h1>
);

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default LocationDetails;
