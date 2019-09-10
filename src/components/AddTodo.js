
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
        <label htmlFor='insert'>Input: </label>
        <input
          id='insert'
          // value={this.state.inputValue}
          value={this.props.inputValue} // using react-redux
          onClick={this.handleInputClick}
          onChange={this.handleInputChange} />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }

  handleInputClick = () => {
    this.props.handleInputClick('');
  }

  handleInputChange = e => {
    this.props.handleInputChange(e.target.value);
  }

  handleClick = () => {
    this.props.handleAddTodo(this.props.inputValue);
  }

  /*
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
    this.setState({
      inputValue: ''
    });
  }

  */
}
