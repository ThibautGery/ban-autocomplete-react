import React from 'react';
import {render} from 'react-dom';
import AutocompleteBan from './AutocompleteBan.jsx';

class App extends React.Component {
  render () {
    return (
      <div class="example">
        <h1> Exemple d'autocomplétion de la BAN</h1>
        <AutocompleteBan />
      </div>);
  }
}

render(<App/>, document.getElementById('app'));
