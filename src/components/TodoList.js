
import React, { Component } from 'react';
import TodoItem from './TodoItem';
import Item from 'antd/lib/list/Item';

export default class TodoList extends Component {
  
  render() {
    const { list, handleToggleTodo } = this.props;
    return (
      <ul>
        {
          list.map(item => {
            return (
              <TodoItem 
                key={item.id} 
                {...item}
                onClick={() => handleToggleTodo(item.id)} />
            )
          })
        }
      </ul>
    )
  }
}
