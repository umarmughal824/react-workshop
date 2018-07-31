import React, { Component } from 'react';

import CheckBox from '../../../common/components/CheckBox';

class CheckBoxField extends Component{
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
		  	<strong>{label}</strong> &nbsp; <br/>
			<CheckBox name={name} value="graduation" onChangeHandler={this.onChangeHandler}/> Graduation <br/>
			<CheckBox name={name} value="postgrad" onChangeHandler={this.onChangeHandler} /> Post Grad <br/>
	      </label>
		);
	}
}

export default CheckBoxField;
