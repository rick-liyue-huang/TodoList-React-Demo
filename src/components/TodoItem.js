
import React, { Component } from 'react'

class TodoItem extends Component {
  render() {
    const { text, completed, onClick } = this.props;
    return (
      <li 
        style={{textDecoration: completed ? 'line-through' : 'none'}}
        onClick={onClick} >
        {text}
      </li>
    )
  }
}

export default TodoItem;
