import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TempInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: '',
      unit: props.unit,
    };

    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(event) {
    this.setState({
      temperature: event.target.value,
    });

    let convertedValue = event.target.value;
    if(this.state.unit == 'Farhenheit')
      convertedValue = (convertedValue - 32) / 1.8;
    this.props.onChange(convertedValue);
  }


  componentWillReceiveProps(nextProps) {
    console.log('...componentWillReceiveProps...');
    /*
      - Listen to changes in prop and update the state of component IF the data (countries or fontColor) has changed
      - remember to also update the isLoading state accordingly
    */
    if(nextProps.temperature != null && this.state.temperature !== nextProps.temperature)
      this.setState({
        temperature: nextProps.temperature,
      });
  }


  render() {
    const { temperature, unit } = this.state;

    return (
        <fieldset>
          <label>Enter Temperature in {unit}</label>
          <input
              placeholder={`Enter value in ${unit}`}
              value={temperature}
              onChange={this.changeHandler}
          />
        </fieldset>
    );
  }
}

TempInput.propTypes = {
  unit: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default TempInput;
