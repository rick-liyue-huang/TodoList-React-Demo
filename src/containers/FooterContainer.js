
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import  { setFilterAction } from '../actions';

const mapStateToProps = state => ({
  filter: state.filter
});

const mapDispatchToProps = dispatch => ({
  handleSetVisibleFilter(filter) {
    const action = dispatch(setFilterAction(filter));
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);