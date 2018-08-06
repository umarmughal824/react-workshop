import React, { Component } from 'react';

import Countries from '../../../util/countries.js'

class Dropdown extends Component{
	constructor(props){
		super(props);

		this.state = {
			countries: Countries,
			label: props.label,
			name: props.name,
			value: props.country,
		};
		this.onChangeHandler = this.onChangeHandler.bind(this);
	}

	onChangeHandler(event){
		this.setState({
			value: event.target.value
		});
		this.props.onChange(event);
	}

	render(){
		const { label, name, value, countries } = this.state;
		return(
		  <label>
		  	<strong>{label}</strong> &nbsp;
			<select name={name} onChange={this.onChangeHandler}>
				{
	            	countries.map(country => 
	            	<option key={country.label} value={country.value}>{country.label}</option>)
	            }
			</select>
	      </label>

		);
	}
}

export default Dropdown;
