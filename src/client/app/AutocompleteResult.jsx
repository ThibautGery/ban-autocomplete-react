import React from 'react';

class AutocompleteResult extends React.Component {

  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this)
  }

  renderItem(item) {
    return (
      <li>
        <a  href="#"
            onClick={(e) => {this.props.selectResult(item.properties.id)}}>
          { item.properties.name }, { item.properties.context }
        </a>
      </li>);
  }

  selectOption(id) {
    return () => { this.props.selectResult() }
  }
  
  render() {
    return (
      <ul className="results">
        { this.props.results.map(this.renderItem) }
      </ul>);
  }

}

export default AutocompleteResult;
