import React from 'react';
import PropTypes from 'prop-types';

const ResultsList = ({results}) => {	
  return (
  	<table className="flights-list">
		<thead>
			<tr>
				<th>Airline</th>
				<th>Departure</th>
				<th>Arrival</th>
				<th>Duration</th>
				<th>Stops</th>
				<th>Price</th>
			</tr>
		</thead>
		<tbody>
		{
			results.map((flight, index) => 
				<tr key={index}>
					<td>{flight.airline}</td>
					<td>{flight.details.departure}</td>
					<td>{flight.details.arrival}</td>
					<td>{flight.duration}</td>
					<td>{flight.stops}</td>
					<td>Rs. <strong>{flight.priceDetails.totalFare}</strong></td>
				</tr>
			)
		}
		</tbody>
	</table>
  );
}

ResultsList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object),
};

export default ResultsList;