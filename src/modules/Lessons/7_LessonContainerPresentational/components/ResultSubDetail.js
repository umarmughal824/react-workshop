import React from 'react';
import PropTypes from 'prop-types';

const ResultSubDetail = ({details}) => {
  return (
	<div>
	  <div className="timings">{details.departureDate}--->---{details.arrivalDate}</div>
	  <div className="location">{details.departure}--->---{details.arrival}</div>
	  <div className="flightId">{details.intervals[0].flightId}</div>
	  <div className="flight-class">{details.intervals[0].class}</div>
	  <div className="limit">{details.bg_info.pieces} pc(s) - {details.bg_info.weight}{details.bg_info.unit}</div>
	</div>
  );
};

ResultSubDetail.propTypes = {
  details: PropTypes.object,
};

export default ResultSubDetail;
