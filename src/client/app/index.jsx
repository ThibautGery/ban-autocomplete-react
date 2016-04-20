import React from 'react';
import {render} from 'react-dom';
import AutocompleteBan from './AutocompleteBan.jsx';

class App extends React.Component {
  render () {
    const limit = 15;
    return (
      <div class="example">
        <h1> Exemple d'autocomplétion de la BAN</h1>
        <AutocompleteBan limit={ limit } />
      </div>);
  }
}

render(<App/>, document.getElementById('app'));
