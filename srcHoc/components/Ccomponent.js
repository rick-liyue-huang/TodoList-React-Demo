
import React, { Component } from 'react'
import AHoC from './Acomponent';


// this is the normal method to use HoC
class Ccomponent extends Component {

  
  render() {
    return (
      <div>
        my name is {this.props.names}
        <br/>
        im {this.props.gender}
        <br/>
        <input type='text' {...this.props} />
        <img src={require('../images/C.png')} alt='' />
      </div>
    )
  }
  changeInput(e) {
    this.setState({
      value: e.target.value
    });
  }
}

export default AHoC('hello')(Ccomponent);
