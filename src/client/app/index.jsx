import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import AutocompleteBan from './AutocompleteBan.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello React!</p>
        <AwesomeComponent />
        <AutocompleteBan />
      </div>);
  }
}

render(<App/>, document.getElementById('app'));
