
import React, { Component } from 'react'
import AHoC from './Acomponent';

// By configuring babelrc in package.json, we use decorator to apply HoC
@AHoC('ok')
class Bcomponent extends Component {
  render() {
    return (
      <div>
        
        <img src={require('../images/B.png')} alt='' />
      </div>
    )
  }
  getName() {
    return 'this is B';
  }
}

export default Bcomponent;
