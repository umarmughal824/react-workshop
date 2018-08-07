import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextInput from '../../../common/components/TextInput';
import RadioButtonField from './RadioButtonField';
import CheckBoxField from './CheckBoxField';
import Dropdown from '../../../common/components/Dropdown';
import Saving from './Saving';
import Countries from '../../../../util/countries.js'

class UserForm extends Component{
	constructor(props){
		super(props);

		this.state = {
			name: '',
			gender: '',
			education: '',
			country: Countries[0].label,
			isSaving: false
		}
		this.onChange = this.onChange.bind(this);
		this.onSelectChange = this.onSelectChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	onChange(event){
		console.log('...onChange...');
		this.setState({
			[event.target.name]: [event.target.value]
		});
	}

	onSelectChange(event){
		console.log('...onSelectChange...');
		var index = event.nativeEvent.target.selectedIndex;
		console.log(event.target.name+' = '+event.nativeEvent.target[index].text);

		this.setState({
			[event.target.name]: event.nativeEvent.target[index].text
		});		
	}

	handleSubmit(event){
		event.preventDefault(event);

		this.setState({
			isSaving: true
		});
		console.log('...handleSubmit...');
		console.log("Submitted Data");
		console.log("Name: "+ this.state.name);
		console.log("Gender: "+ this.state.gender);
		console.log("education: "+ this.state.education);
		console.log("Country: "+ this.state.country);
	}

	render(){
		const { name, gender, education, country, isSaving } = this.state;
		
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<fieldset>
						<TextInput label="Name" name="name" value={name}
						onChange={this.onChange} placeholder="Enter your name" />
					</fieldset>
					<fieldset>
						<RadioButtonField label="Gender" name="gender" value={gender} onChange={this.onChange} />
					</fieldset>
					<fieldset>
						<CheckBoxField label="Education" name="education" value={education} onChange={this.onChange} />
					</fieldset>
					<fieldset>
						<Dropdown label="Country" name="country" value={country} onChange={this.onSelectChange} />
					</fieldset>
					<input type="submit" value="Sign Up" />
				</form>
				{ isSaving && <Saving />}
			</div>
		);
	}
}

export default UserForm;
