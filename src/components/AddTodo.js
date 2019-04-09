
import React, { Component } from 'react';

class AddTodo extends Component {
  
  render() {
    return (
      <div>
        <input 
          value={this.props.inputValue}
          onChange={this.handleInputChange.bind(this)} />
        <button onClick={this.handleClick.bind(this)}>Submit</button>
      </div>
    );
  }

  handleInputChange(e) {
    this.props.setTodoText(e.target.value);
  }

  handleClick() {
    this.props.addTodo(this.props.inputValue)
  }
}

export default AddTodo;