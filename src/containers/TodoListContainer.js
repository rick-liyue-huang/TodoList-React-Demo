
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { toggleTodoAction } from '../actions';

const getVisibleList = (list, filter) => {
  switch (filter) {
    case 'all':
      return list;
    case 'completed':
      return list.filter(item => item.completed);
    case 'active':
      return list.filter(item => !item.completed);
    default:
      return new Error('unknown filter: ', filter);
  }
}

const mapStateToProps = state => ({
  list: getVisibleList(state.list, state.filter)
});

const mapDispatchToProps = dispatch => ({
  handleToggleTodo: id => dispatch(toggleTodoAction(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);