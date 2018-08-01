import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ResultDetail from './ResultDetail';

class ResultsList extends Component{
  constructor(props){
	super(props);

	this.state = {
	  results: props.results,
	};
  }

  render(){
	const { results, isHidden } = this.state;
	
    return (
	  <div>
	  	{
		  results.map((flight, index) => 
			<div key={index}>
	  		  <ResultDetail flight={flight} />
			</div>
		  )
	  	}
	  </div>
	  );
	}
}

ResultsList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object),
};

export default ResultsList;
