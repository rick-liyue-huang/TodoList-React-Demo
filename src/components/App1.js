 

import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      filter: 'all'
    };
    this.nextId = 0;

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleToggleTodo = this.handleToggleTodo.bind(this);
    this.handleSetVisibleFilter = this.handleSetVisibleFilter.bind(this);
  }

  render() {
    const list = this.getVisibleList();
    return (
      <div>
        <AddTodo handleAddTodo={this.handleAddTodo} />
        <TodoList list={list} handleToggleTodo={this.handleToggleTodo} />
        <Footer filter={this.state.filter} handleSetVisibleFilter={this.handleSetVisibleFilter} />
      </div>
    );
  }

  handleAddTodo(text) {
    const item = {
      id: this.nextId++,
      text,
      completed: false
    };
    const newList = [...this.state.list, item];
    this.setState({
      list: newList
    });
  }

  getVisibleList() {
    const currentFilter = this.state.filter;
    return this.state.list.filter(item => {
      if(currentFilter === 'active') {
        return !item.completed;
      } else if(currentFilter === 'completed') {
        return item.completed;
      } else if(currentFilter === 'all') {
        return true;
      } else {
        return new Error('unknown filter: ', currentFilter);
      }
    });
  }

  handleToggleTodo(id) {
    const newList = this.state.list.map(item => 
      item.id === id ? {...item, completed: !item.completed} : item
    );

    this.setState({
      list: newList
    });
  }

  handleSetVisibleFilter(filter) {
    this.setState({
      filter
    });
  }
}

export default App;