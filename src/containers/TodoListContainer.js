
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { toggleTodoAction, fetchTodoListAction } from '../actions';

const handleVisibleList = (filter, list) => {
  switch(filter) {
    case 'all':
      return list;
    case 'active':
      return list.filter(item => !item.completed);
    case 'completed':
      return list.filter(item => item.completed);
    default:
      return new Error('unknown filter: ', filter);
  }
}

const mapStateToProps = state => ({
  list: handleVisibleList(state.filter, state.list.data)
});

const mapDispatchToProps = dispatch => ({
  handleToggleTodo: id => dispatch(toggleTodoAction(id)),
  handleThunkList: () => dispatch(fetchTodoListAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);