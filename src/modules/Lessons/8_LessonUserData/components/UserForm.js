import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextInput from '../../../common/components/TextInput';
// import RadioButtonField from './RadioButtonField';
import RadioButton from '../../../common/components/RadioButton';
import CheckBox from '../../../common/components/CheckBox';
// import CheckBoxField from './CheckBoxField';
import Dropdown from '../../../common/components/Dropdown';
import Saving from './Saving';
import Countries from '../../../../util/countries.js'

class UserForm extends Component{
	constructor(props){
		super(props);

		this.state = {
			name: '',
			gender: '',
			education: [],
			country: Countries[0].label,
			isSaving: false,
			radioButtonOptions: [{key:'male', value: 'Male'}, 
			{key:'female', value: 'Female'}],
			checkBoxOptions: [{key:'grad', value: 'Graduation'}, 
			{key:'postgrad', value: 'Post Graduate'}],
		}
		this.onChange = this.onChange.bind(this);
		this.onSelectChange = this.onSelectChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	onChange(event){
		var type = event.target.getAttribute('type');
		console.log('...onChange...');
		if(type == 'checkbox'){
			var checkboxes = document.getElementsByName("education");
			var values = []
			for(var i=0; i <checkboxes.length; i++){
				if(checkboxes[i].checked)
					values.push(checkboxes[i].value);
			}
			this.setState({
				[event.target.name]: values
			});			
		}
		else{
			this.setState({
				[event.target.name]: [event.target.value]
			});
		}
	}

	onSelectChange(event){
		console.log('...onSelectChange...');
		this.setState({
			[event.target.name]: event.target.value
		});		
	}

	handleSubmit(event){
		event.preventDefault(event);

		this.setState({
			isSaving: false
		});
		console.log('...handleSubmit...');
		console.log("Submitted Data");
		console.log("Name: "+ this.state.name);
		console.log("Gender: "+ this.state.gender);
		console.log("education: "+ this.state.education);
		console.log("Country: "+ this.state.country);
	}

	render(){
		const { name, gender, education, country, isSaving, radioButtonOptions, checkBoxOptions } = this.state;
		
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<fieldset>
						<TextInput label="Name" name="name" value={name}
						onChange={this.onChange} placeholder="Enter your name" />
					</fieldset>
					<fieldset>
						<label><strong>Gender</strong> &nbsp;
						<RadioButton name="gender" value={gender} options={radioButtonOptions} onChange={this.onChange} />
						</label>
					</fieldset>
					<fieldset>
					  <label>
					  	<strong>Education</strong> &nbsp; <br/>
						<CheckBox name="education" value="graduation" options={checkBoxOptions} onChangeHandler={this.onChange}/>
					  </label>
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
