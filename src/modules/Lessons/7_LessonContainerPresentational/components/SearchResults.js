import React, { Component } from 'react';

import Loader from './Loader';
import ResultsList from './ResultsList';
import resultsList from '../../../../util/resultsList';

class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: null,
      isLoading: true,
    };
  }

  componentWillMount() {
    console.log('...componentWillMount...');
    /* Load results from API or a local file: resultsList and create a view of Search Results
       that should render the information as well as implement the Show/Hide detail
    */
    setTimeout(() => {
      this.setState({
        results: resultsList,
        isLoading: false
      });
    }, 5000);
  }

  getCurrentView(){
    const { results, isLoading } = this.state;
    let view = null;
    if(isLoading)
      view = <Loader />
    else if(results){
      view = <ResultsList results={results}/>
    }
    return view;
  }

  render() {
    let page = this.getCurrentView();

    return (
        <section className="info-panel">
          <h2>Search Results</h2>
          <div className="results-body">
            {page}
          </div>
        </section>
    )
  }
}

export default SearchResults;
