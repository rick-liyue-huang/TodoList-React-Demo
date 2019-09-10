
import { connect } from 'react-redux';
import AddTodo from '../components/AddTodo';
import { clickInputAction, changeInputAction, addTodoAction } from '../actions';
import { getInputValue } from '../selectors';

const mapStateToProps = state => ({
  // inputValue: state.inputValue
  inputValue: getInputValue(state)
});

const mapDispatchToProps = dispatch => ({
  handleInputClick: value => dispatch(clickInputAction(value)),
  handleInputChange: value => dispatch(changeInputAction(value)),
  handleAddTodo: text => dispatch(addTodoAction(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);