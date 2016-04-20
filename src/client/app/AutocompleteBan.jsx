import React from 'react';

class AutocompleteBan extends React.Component {

  constructor(props) {
    super(props);
  }

  getResults() {
    const banRequest = new Request('http://api-adresse.data.gouv.fr/search/?q=8 bd du port');
    fetch(banRequest)
      .then(function(response) {
        return response.json()
      })
      .then(function(json) {
        console.log('result', json)
      });
  }


  render() {
    return (<input type="text" onKeyUp={this.getResults} />);
  }

}

export default AutocompleteBan;
