import React from 'react';
import {render} from 'react-dom';
import AutocompleteBan from 'ban-autocomplete-react';

class App extends React.Component {
  render () {
    return (
      <div class="example">
        <h1> Exemple d'autocomplétion de la BAN</h1>
        <div>
          <h2>Using defaults config</h2>
          <AutocompleteBan />
        </div>
        <div>
          <h2>Using custom config</h2>
          <AutocompleteBan maxResults={ 15 } minCharacters={ 4 } />
        </div>
      </div>);
  }
}

render(<App/>, document.getElementById('app'));
