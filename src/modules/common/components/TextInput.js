import React, { Component } from 'react';


class TextInput extends Component{
	constructor(props){
		super(props);

		this.state = {
			label: props.label,
			name: props.name,
			value: props.value,
			placeholder: props.placeholder
		}

		this.onChangeHandler = this.onChangeHandler.bind(this);
	}

	onChangeHandler(event){
		this.setState({
			value: event.target.value
		});
		this.props.onChange(event);
	}

	render(){
		const { label, name, value, placeholder } = this.state;
		
		return (
	      <label>
		      <strong>{label}</strong> &nbsp;
		      <input type="text" name={name} value={value} onChange={this.onChangeHandler} placeholder={placeholder} />
	      </label>
		);
	}
}

export default TextInput;
