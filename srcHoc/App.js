
import React, { Component, Fragment } from 'react';
import Bcomponent from './components/Bcomponent';
import Ccomponent from './components/Ccomponent';
import Ecomponent from './components/Ecomponent';
import Fcomponent from './components/Fcomponent';

class App extends Component {

  render() {
    return (
      <Fragment>
        <Bcomponent />
        <Ccomponent names={'leo'} />
        <Ecomponent />
        <Fcomponent />
      </Fragment>
    )
  }
}

export default App;