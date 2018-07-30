import React, { Component } from 'react';
import PropTypes from 'prop-types';


class HooksList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontColor: props.fontColor || 'red',
      countries: [],
      isLoading: true,
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('...componentWillReceiveProps...');
    /*
      - Listen to changes in prop and update the state of component IF the data (countries or fontColor) has changed
      - remember to also update the isLoading state accordingly
    */
    if(nextProps.countries !== this.state.countries){
      this.setState({
        countries: nextProps.countries,
        isLoading: false,
      });
    }

    if(nextProps.fontColor && nextProps.fontColor !== this.state.fontColor){
      this.setState({
        fontColor: nextProps.fontColor,
      });
    }
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    const pStyle = {
      color: this.state.fontColor
    };

    const { isLoading, countries } = this.state;
    return isLoading ? <h4>Loading data...</h4> : (
        <ul className="countries-list" style={pStyle}>
          {
            countries.map(country => <li>{country.label}({country.value})</li>)
          }
        </ul>
    );
  }
}


HooksList.propTypes = {
  fontColor: PropTypes.string,
  countries: PropTypes.arrayOf(PropTypes.object),
};

export default HooksList;
