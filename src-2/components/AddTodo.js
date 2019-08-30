
import React, { Component } from 'react';

class AddTodo extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.hanldeClick = this.hanldeClick.bind(this);
  }

  render() {
    return (
      <div>
        <input 
          value={this.props.inputValue}
          onClick={this.props.handleInputClick}
          onChange={this.handleChange} />
        <button onClick={this.hanldeClick} >Submit</button>
      </div>
    );
  }

  handleChange(e) {
    this.props.handleInputChange(e);
  }

  hanldeClick() {
    this.props.handleAddTodo(this.props.inputValue);
  }

}

export default AddTodo;