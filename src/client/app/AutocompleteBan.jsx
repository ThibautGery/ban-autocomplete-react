import React from 'react';
import AutocompleteResult from './AutocompleteResult.jsx';


class AutocompleteBan extends React.Component {

  constructor(props) {
    super(props);
    this.state = { query: "" };
    this.handleChange = this.handleChange.bind(this)
    this.getResults = this.getResults.bind(this)
  }

  getResults() {
    const query = this.state.query
    const banRequest = new Request('http://api-adresse.data.gouv.fr/search/?q=' + query);
    fetch(banRequest)
      .then(function(response) {
        return response.json()
      })
      .then(function(json) {
        console.log('result', json.features)
      });
  }

  handleChange(event) {
    console.log('event.target', event.target.value)
    this.setState({ query: event.target.value });
  }

  render() {
    return (<div class="ban-search">
      <input  type="text"
                      value={this.state.value}
                      onChange={this.handleChange}
                      onKeyUp={this.getResults} />
                    <AutocompleteResult />
    </div>);
  }

}

export default AutocompleteBan;
