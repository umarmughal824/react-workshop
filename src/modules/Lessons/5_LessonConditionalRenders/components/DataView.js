import React from 'react';
import PropTypes from 'prop-types';

const DataView = ({countries}) => {
  return (
	  <ul className="countries-list">
	  	{
	  	  countries.map((country, index) => <li key={index}>{country.label}</li>)
	  	}
	  </ul>
  );
}

DataView.propTypes = {
  countries: PropTypes.object,
};

export default DataView;
