
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { toggleTodoAction, fetchThunkListAction } from '../actions';
import { handleGetVisibleList } from '../selectors';
import { toJS } from '../HoCs/toJS';

/*
// defined in selectors
const handleGetVisibleList = state => {
  const { filter, list: {data} } = state;
  if(filter === 'all') {
    return data;
  } else if(filter === 'active') {
    return data.filter(item => !item.completed);
  } else if (filter === 'completed') {
    return data.filter(item => item.completed);
  } else {
    return new Error('unknown filter: ', filter);
  }
}
*/

const mapStateToProps = state => ({
  list: handleGetVisibleList(state) // 
  // list: handleGetVisibleList(state).toJS() // transfer back to normal js
});

const mapDispatchToProps = dispatch => ({
  handleToggleTodo: id => dispatch(toggleTodoAction(id)),
  handleThunkList: () => dispatch(fetchThunkListAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(toJS(TodoList));