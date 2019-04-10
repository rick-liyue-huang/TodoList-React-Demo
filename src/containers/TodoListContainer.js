
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { toggleTodoAction, fetchListAction } from '../actions';

const getVisibleList = (list, filter) => {
  return list.filter(item => {
    if(filter === 'active') {
      return !item.completed;
    } else if(filter === 'completed') {
      return item.completed;
    } else if (filter === 'all') {
      return true;
    } else {
      return new Error('unknown filter: ', filter);
    }
  });
}

const mapStateToProps = state => ({
  list: getVisibleList(state.list.data, state.filter)
});

const mapDispatchToProps = dispatch => ({
  handleToggleTodo(id) {
    const action = toggleTodoAction(id);
    dispatch(action);
  },
  handleFetchList() {
    const action = fetchListAction();
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);