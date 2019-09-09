
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { toggleTodoAction, fetchTodoListAction } from '../actions';
import { toJS } from '../HoCs/toJS';

// add selector
import { handleVisibleList } from '../selectors';
/*
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
*/

const mapStateToProps = state => ({
  list: handleVisibleList(state)
  // list: handleVisibleList(state).toJS()
});

const mapDispatchToProps = dispatch => ({
  handleToggleTodo: id => dispatch(toggleTodoAction(id)),
  handleThunkList: () => dispatch(fetchTodoListAction())
});

// export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default connect(mapStateToProps, mapDispatchToProps)(toJS(TodoList));