
import { connect } from 'react-redux';
import AddTodo from '../components/AddTodo';
import { addTodoAction, setTodoTextAction } from '../actions';

const mapStateToProps = state => ({
  inputValue: state.inputValue
});

const mapDispatchToProps = dispatch => ({
  setTodoText: value => dispatch(setTodoTextAction(value)),
  addTodo: text => dispatch(addTodoAction(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);