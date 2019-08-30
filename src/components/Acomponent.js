
import React, { Component } from 'react'

// HoC 
function AHoC(WrappedComponent) {
  return class Acomponent extends Component {
    render() {
      return (
        <div className='a-container'>
          <div className='header'>
            <div>Tips: </div>
            <div>X</div>
          </div>
          <div>
            <WrappedComponent></WrappedComponent>
          </div>
        </div> 
      )
    }
  }
}

export default AHoC;


