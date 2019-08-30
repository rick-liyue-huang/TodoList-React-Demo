
import React, { Component, Fragment } from 'react';
import AddTodoContainer from '../containers/AddTodoContainer';
import TodoListContainer from '../containers/TodoListContainer';
import FooterContainer from '../containers/FooterContainer';

class App extends Component {

  render() {
    return (
      <Fragment>
        <AddTodoContainer />
        <TodoListContainer />
        <FooterContainer />
      </Fragment>
    );
  }
}

export default App;