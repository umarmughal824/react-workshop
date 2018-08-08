import React, { Component } from 'react';

class CheckBox extends Component{
	constructor(props){
		super(props);
	
		this.state = {
			label: props.label,
			name: props.name,
			value: props.value,
			options: props.options
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
		const { name, value, options } = this.state;
		return(
			<div>
			{
			options.map(option => <span key={option.key}>
				<input type="checkbox" name={name} value={option.key} 
	      onChange={this.onChangeSubHandler} /> { option.value}
				<br/></span>
			)
			}
			</div>
		);
	}
}

export default CheckBox;
