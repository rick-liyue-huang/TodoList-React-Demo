
import React, { Component } from 'react'

export default class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'input'
    };
  }

  render() {
    return (
      <div>
        <label htmlFor='insert'>Show: </label>
        <input
          id='insert'
          value={this.state.inputValue}
          onClick={this.handleInputClick}
          onChange={this.handleInputChange} />
        <button onClick={this.handleBtnClick}>Submit</button>
      </div>
    )
  }

  handleInputClick = () => {
    this.setState({
      inputValue: ''
    });
  }

  handleInputChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  }

  handleBtnClick = () => {
    this.props.handleAddTodo(this.state.inputValue);
    this.setState({
      inputValue: ''
    });
  }
}
