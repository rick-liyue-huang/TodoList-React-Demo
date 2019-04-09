
import React, { Component } from 'react';
// import the three components
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

class App extends Component {
  
  constructor(props) {
    super(props);
    // set state
    this.state = {
      list: [
        {
          id: 0,
          text: 'en',
          completed: false
        },
        {
          id: 1,
          text: 'js',
          completed: true
        }
      ],
      filter: 'all'
    };
    this.nextId = this.state.list.length;

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleToggleTodo = this.handleToggleTodo.bind(this);
    this.setVisibleFilter = this.setVisibleFilter.bind(this);
  }

  render() {
    const list = this.getVisibleList();
    return (
      <div>
        <AddTodo handleAddTodo={this.handleAddTodo} />
        <TodoList list={list} handleToggleTodo={this.handleToggleTodo} />
        <Footer filter={this.state.filter} setVisibleFilter={this.setVisibleFilter} />
      </div>
    );
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
    });
  }

  // get list by different filter
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

  handleToggleTodo(id) {
    const newList = this.state.list.map(item => {
      return item.id === id ? {...item, completed: !item.completed} : item
    });

    // delete the item with 'id'
    /*const newList = this.state.list.filter(item => {
      if(item.id !== id) {
        return true
      }
    });*/
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