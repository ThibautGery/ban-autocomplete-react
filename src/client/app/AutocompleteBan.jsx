import React from 'react';
import AutocompleteResult from './AutocompleteResult.jsx';


class AutocompleteBan extends React.Component {

  constructor(props) {
    super(props);
    this.state = { query: "", results: [] };
    this.handleChange = this.handleChange.bind(this)
    this.getResults = this.getResults.bind(this)
    this.selectResult = this.selectResult.bind(this)
  }

  getResults() {
    const query = this.state.query
    const maxResults = this.props.maxResults || 7
    const minCharacters = this.props.minCharacters || 3
    if(query.length < minCharacters) return;
    const banRequest = new Request('http://api-adresse.data.gouv.fr/search/?q=' + query + '&limit=' + maxResults);
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

  selectResult(id) {
    const getById = (item) => { return item.properties.id === id }
    const currentResult = this.state.results.filter(getById)[0]
    const currentAddressTemplated = this.templateQuery(currentResult)
    this.setState({results: [], query: currentAddressTemplated })
  }

  templateQuery(address) {
    return address.properties.name + ' ' + address.properties.context
  }

  render() {
    return (<div className="ban-search">
      <input className="searchBox" type="text"
                      value={this.state.query}
                      onChange={this.handleChange}
                      onKeyUp={this.getResults} />
                    <AutocompleteResult results={this.state.results} selectResult={ this.selectResult }/>
    </div>);
  }

}

export default AutocompleteBan;
