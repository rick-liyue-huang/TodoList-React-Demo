
import React, { Component } from 'react'

function DHoC(wrappedComponent) {
  return class Dcomponent extends Component {
    render() {
      return (
        <div>
          <wrappedComponent></wrappedComponent>
        </div>
      )
    }
  }
}


export default DHoC;
