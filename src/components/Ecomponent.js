import React, { Component } from 'react'
import Dcomponent from './Dcomponent';

// for Inheritance Inversion
@Dcomponent
class Ecomponent extends Component {
  render() {
    return (
      <div>
        this is E component.
      </div>
    )
  }

  componentWillMount() {
    console.log('this is original lifecycle')
  }
}

export default Ecomponent;
