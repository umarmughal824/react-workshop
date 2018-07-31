import React, { Component } from 'react';

class RadioButton extends Component{
	constructor(props){
		super(props);

		this.state = {
			label: props.label,
			name: props.name,
			value: props.value,
		};
		this.onChangeSubHandler = this.onChangeSubHandler.bind(this);
	}

	onChangeSubHandler(event){
		this.setState({
			value: event.target.value
		});
		this.props.onChangeHandler(event);
	}

	render(){
		const { name, value } = this.state;
		return(
	      <input type="radio" name={name} value={value} 
	      onChange={this.onChangeSubHandler} />
		);
	}
}

export default RadioButton;
