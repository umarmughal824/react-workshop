import React, { Component } from 'react';

import RadioButton from '../../../common/components/RadioButton';

class RadioButtonField extends Component{
	constructor(props){
		super(props);

		this.state = {
			label: props.label,
			name: props.name,
			value: props.value,
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
		const { label, name, value } = this.state;

		return(
		  <label>
		  	<strong>{label}</strong> &nbsp;
			<RadioButton name={name} value="Male" onChangeHandler={this.onChangeHandler} /> Male
			<RadioButton name={name} value="Female" onChangeHandler={this.onChangeHandler} /> Female
	      </label>
		);
	}
}

export default RadioButtonField;
