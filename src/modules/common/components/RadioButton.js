import React, { Component } from 'react';

class RadioButton extends Component{
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
		this.props.onChange(event);
	}

	render(){
		const { name, value, options } = this.state;
		return(
			<span>
			{
				options.map(option => <span key={option.key}>
					<input type="radio" name={name} value={option.key} onChange={this.onChangeSubHandler} />
					 {option.value}
					</span>
				)
			}
			</span>
		);
	}
}

export default RadioButton;
