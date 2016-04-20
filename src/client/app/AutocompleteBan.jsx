import React from 'react';

class AutocompleteBan extends React.Component {

  constructor(props) {
    super(props);
  }

  getResults() {
    console.log('ON KEY UP PRESSED')
  }


  render() {
    return (<input type="text" onKeyUp={this.getResults} />);
  }

}

export default AutocompleteBan;
