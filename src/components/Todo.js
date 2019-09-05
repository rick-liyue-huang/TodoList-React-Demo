
import React, { Component } from 'react'

class Todo extends Component {

  render() {
    const { completed, text, onClick } = this.props;
    return (
      <li 
        style={{textDecoration: completed ? "line-through" : "none"}}
        onClick={onClick} >
        {text}
      </li>
    )
  }
}

export default Todo;
