import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ResultSubDetail from './ResultSubDetail';

class ResultDetail extends Component{
  constructor(props){
	super(props);

    this.state = {
  	  flight: props.flight,
	  isHidden: true
    };

	this.toggleDetail = this.toggleDetail.bind(this);
  }

  toggleDetail(){
	console.log('...toggleDetail...');
	this.setState({
	  isHidden: !this.state.isHidden
	});
  }

  render(){
	const { flight, isHidden } = this.state;
	return (
	  <div className="flight">
		<span>{flight.airline}</span>
		<span>{flight.details.departure}</span>
		<span>{flight.details.arrival}</span>
		<span>{flight.duration}</span>
		<span>{flight.stops}</span>
		<span>Rs. <strong>{flight.priceDetails.totalFare}</strong></span>
		<button onClick={this.toggleDetail}>{isHidden ? "Show Details" : "Hide Details"}</button>
		{!isHidden && <ResultSubDetail details={flight.details}/>}
	  </div>
	);
  }
};

ResultDetail.propTypes = {
  props: PropTypes.object,
};

export default ResultDetail;
