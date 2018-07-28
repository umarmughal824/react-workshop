import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import AssignmentDetails from './AssignmentDetails';
import DataView from './DataView'
import NotFound from './NotFound'
import Loading from './Loading'
import ServerError from './ServerError'
import Countries from '../../../../util/countries.js'

class ConditionalRenderPractice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      isLoading: true,
      error: null
    };

    this.setNotFound = this.setNotFound.bind(this);
    this.setLoading = this.setLoading.bind(this);
    this.reloadData = this.reloadData.bind(this);
    this.setServerError = this.setServerError.bind(this);
  }

  componentWillMount(){
    console.log('...ComponentWillMount...');
    setTimeout(() => {
      this.setState({
        data: Countries,
        isLoading: false
      });
    }, 5000);
  }

  reloadData(newProps){
    this.setState({
      data: Countries,
      error: null,
      isLoading: false
    });
  }

  setNotFound(){
    this.setState({
      data: [],
      error: null,
      isLoading: false,
    });
  }

  setLoading(){
    console.log("...setLoading...");
    this.setState({
      data: [],
      error: null,
      isLoading: true
    });
  }

  setServerError(){
    this.setState({
      data: [],
      isLoading: false,
      error: {"message": "Something Went Wrong"}
    });
  }

  getCurrentView(){
    const { isLoading, data, error } = this.state;
    let view = null;
    if(isLoading)
      view = <Loading />
    else if(data && data.length > 0)
      view = <DataView countries={data}/>
    else if(!error && isLoading == false)
      view = <NotFound />
    else
      view = <ServerError error={error}/>
    return view;
  }

  render() {
    let page = this.getCurrentView();
        
    return (
        <section className="lesson-conditional-render info-panel">
          <h2>Practice Conditional Rendering</h2>
          {page}
          <div className="action-prompt" style={{textAlign: 'center'}}>
            <button onClick={this.setNotFound}>Not Found</button> &nbsp;
            <button onClick={this.setServerError}>Server Error</button> &nbsp;
            <button onClick={this.setLoading}>Loading</button> &nbsp;
            <button onClick={this.reloadData}>Reload Data</button> &nbsp;
          </div>
        </section>
    );
  }
}

ConditionalRenderPractice.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
  error: PropTypes.arrayOf(PropTypes.object)
}

export default ConditionalRenderPractice;
