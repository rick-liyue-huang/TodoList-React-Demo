
import React, { Component } from 'react'

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'input'
    };
  }
  render() {
    // const { handleAddTodo } = this.props;
    return (
      <div>
        <label htmlFor='insert'>Input: </label>
        <input
          id='insert'
          value={this.state.inputValue}
          onClick={this.handleInputClick}
          onChange={this.handleInputChange} />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }

  handleInputClick = () => {
    this.setState(() => ({
      inputValue: ''
    }));
  }

  handleInputChange = e => {
    const value = e.target.value;
    this.setState(() => ({
      inputValue: value
    }));
  }

  handleClick = () => {
    this.props.handleAddTodo(this.state.inputValue);
  }

}

export default AddTodo;
