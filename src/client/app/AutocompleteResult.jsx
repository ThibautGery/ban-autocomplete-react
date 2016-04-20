import React from 'react';

class AutocompleteBan extends React.Component {

  constructor(props) {
    super(props);
  }



  render() {
    return (<ul class="results">
      <li class="result"><a href="#">result 1</a></li>
      <li class="result"><a href="#">result 2</a></li>
    </ul>);
  }

}

export default AutocompleteBan;
