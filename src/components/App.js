
import React, { Component, Fragment } from 'react';
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
    this.setVisibleFilter = this.setVisibleFilter.bind(this);
  }
  render() {
    const list = this.getVisibleList();
    return (
      <Fragment>
        <AddTodo handleAddTodo={this.handleAddTodo} />
        <TodoList list={list} handleToggleTodo={this.handleToggleTodo} />
        <Footer filter={this.state.filter} setVisibleFilter={this.setVisibleFilter}/>
      </Fragment>
    );
  }

  getVisibleList() {
    const currentFilter = this.state.filter;
    return this.state.list.filter(item => {
      if(currentFilter === 'active') {
        return !item.completed;
      } else if(currentFilter === 'completed') {
        return item.completed;
      } else {
        return true;
      }
    });
  }

  handleAddTodo(text) {
    const item = {
      id: this.nextId++,
      text,
      completed: false
    };
    const newList = [item, ...this.state.list];
    this.setState({
      list: newList
    })
  }

  handleToggleTodo(id) {
    const newList = this.state.list.map(item => {
      return item.id === id ? {...item, completed: !item.completed} : item;
    });
    this.setState({
      list: newList
    });
  }

  setVisibleFilter(filter) {
    this.setState({
      filter
    });
  }
}

export default App;