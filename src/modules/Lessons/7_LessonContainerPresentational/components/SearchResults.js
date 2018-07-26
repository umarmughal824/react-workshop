import React, { Component } from 'react';

import Loader from './Loader';

class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: null,
      isLoading: true,
    };
  }

  componentWillMount() {
    /* Load results from API or a local file*/
  }

  render() {
    const { isLoading } = this.state;

    return (
        <section className="info-panel">
          <h2>Search Results</h2>
          <div className="results-body">
            {
              isLoading && <Loader />
            }
          </div>
        </section>
    )
  }
}

export default SearchResults;
