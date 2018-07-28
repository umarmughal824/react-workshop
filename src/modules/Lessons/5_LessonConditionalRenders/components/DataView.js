import React, { Component } from 'react';

class DataView extends Component{
  constructor(props){
    super(props);

    this.state = {
      countries: props.countries,
    }
  }

  render(){
  	const { countries } = this.state;

    return (
	  <ul className="countries-list">
	  	{
	  	  countries.map((country, index) => <li key={index}>{country.label}</li>)
	  	}
	  </ul>
	);
  }
}

export default DataView;