import React from 'react';

class AutocompleteResult extends React.Component {

  constructor(props) {
    super(props);
  }

  renderItem(item) {
    return <li class="result">{ item.properties.context }, { item.properties.name } </li>;
  };

  render() {
    return <ul class="results">{ this.props.results.map(this.renderItem) }</ul>;
  }

}

export default AutocompleteResult;
