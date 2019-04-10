
import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    const { list, handleToggleTodo } = this.props;
    return (
      <ul>
        {
          list.map(item => {
            return <TodoItem key={item.id} {...item} onClick={() => handleToggleTodo(item.id)} />
          })
        }
      </ul>
    );
  }

  componentDidMount() {
    this.props.handleFetchList();
  }
}

export default TodoList;