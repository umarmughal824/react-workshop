import React, { Component } from 'react';

import TempInput from './TempInput';
import BoilingNotice from './BoilingNotice';

const TEMP_UNITS = {
  CELSIUS: 'Celsius',
  FARHENHEIT: 'Farhenheit',
};

class TemperatureCalculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: '',
      ftemperature: '',
    };

    this.setTemperature = this.setTemperature.bind(this);
  }

  setTemperature(temperature, unit) {
    let ftemperature = temperature;
    
    if(temperature !== '')
      if(unit === 'Celsius')
        ftemperature = temperature * 1.8 + 32;
      else
        temperature = (temperature - 32) / 1.8;
  
    this.setState({
      temperature,
      ftemperature,
    });
  }

  render() {
    const { temperature, ftemperature } = this.state;
    
    return (
        <section className="lesson-calculator info-panel">
          <h2>Temperature Calculator</h2>

          <div className="form-holder">
            <TempInput temperature={temperature} unit={TEMP_UNITS.CELSIUS} onChange={this.setTemperature} />
            <TempInput temperature={ftemperature} unit={TEMP_UNITS.FARHENHEIT} onChange={this.setTemperature} />
            <BoilingNotice temperature={temperature}/>
          </div>

        </section>
    );
  }
}

export default TemperatureCalculator;
