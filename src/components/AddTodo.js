
import React, { Component } from 'react'

export default class AddTodo extends Component {

  render() {
    return (
      <div>
        <label htmlFor='insert'>Show: </label>
        <input
          id='insert'
          value={this.props.inputValue}
          onClick={this.handleInputClick}
          onChange={this.handleInputChange} />
        <button onClick={this.handleBtnClick}>Submit</button>
      </div>
    )
  }

  handleInputClick = () => {
    this.props.handleInputClick('');
  }

  handleInputChange = e => {
    this.props.handleInputChange(e.target.value);
  }

  handleBtnClick = () => {
    this.props.handleBtnClick(this.props.inputValue);
  }
}

/*
// Here only use react to deal with state
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

*/
