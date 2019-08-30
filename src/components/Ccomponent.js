
import React, { Component } from 'react'
import AHoC from './Acomponent';

class Ccomponent extends Component {
  render() {
    return (
      <div>
        <img src={require('../images/C.png')} alt='' />
      </div>
    )
  }
}

export default AHoC(Ccomponent);
