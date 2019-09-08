
import React, { Component, Fragment } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <AddTodo />
        <TodoList />
        <Footer />
      </Fragment>
    )
  }
}
