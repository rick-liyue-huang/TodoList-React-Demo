
import { connect } from 'react-redux';
import AddTodo from '../components/AddTodo';
import { 
  inputClickAction, 
  inputChangeAction,
  addTodoAction
 } from '../actions';
import { getValue } from '../selectors';

const mapStateToProps = state => ({
  // inputValue: state.inputValue
  inputValue: getValue(state)
});

const mapDispatchToProps = dispatch => ({
  handleInputClick() {
    const action = inputClickAction('');
    dispatch(action);
  },
  handleInputChange(e) {
    const action = inputChangeAction(e.target.value);
    dispatch(action);
  },
  handleAddTodo(text) {
    const action = addTodoAction(text);
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);