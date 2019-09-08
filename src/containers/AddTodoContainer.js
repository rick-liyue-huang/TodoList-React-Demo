
import { connect } from 'react-redux';
import AddTodo from '../components/AddTodo';
import { clickInputAction, changeInputAction, addTodoActioin } from '../actions';

const mapStateToProps = state => ({
  inputValue: state.inputValue
});

const mapDispatchToProps = dispatch => ({
  handleInputClick: value => dispatch(clickInputAction(value)),
  handleInputChange: value => dispatch(changeInputAction(value)),
  handleBtnClick: text => dispatch(addTodoActioin(text)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);