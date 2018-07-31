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
		var index = event.nativeEvent.target.selectedIndex;

		this.setState({
			value: event.nativeEvent.target[index].text
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
	            	<option value={country.value}>{country.label}</option>)
	            }
			</select>
	      </label>

		);
	}
}

export default Dropdown;
