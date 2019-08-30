
import React, { Component } from 'react'
import AHoC from './Acomponent';

class Bcomponent extends Component {
  render() {
    return (
      <div>
        <img src={require('../images/B.png')} alt='' />
      </div>
    )
  }
}

export default AHoC(Bcomponent);
