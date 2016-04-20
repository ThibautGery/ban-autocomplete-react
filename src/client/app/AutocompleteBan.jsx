import React from 'react';
import AutocompleteResult from './AutocompleteResult.jsx';


class AutocompleteBan extends React.Component {

  constructor(props) {
    super(props);
    this.state = { query: "", results: [] };
    this.handleChange = this.handleChange.bind(this)
    this.getResults = this.getResults.bind(this)
  }

  getResults() {
    const query = this.state.query
    const banRequest = new Request('http://api-adresse.data.gouv.fr/search/?q=' + query);
    fetch(banRequest)
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        this.setState({results: json.features, query: this.state.query});
      });
  }

  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  render() {
    return (<div class="ban-search">
      <input  type="text"
                      value={this.state.value}
                      onChange={this.handleChange}
                      onKeyUp={this.getResults} />
                    <AutocompleteResult results={this.state.results}/>
    </div>);
  }

}

export default AutocompleteBan;
