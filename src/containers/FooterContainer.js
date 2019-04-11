
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import  { setFilterAction } from '../actions';
import { getFilter } from '../selectors';

const mapStateToProps = state => ({
  // filter: state.filter
  filter: getFilter(state)
});

const mapDispatchToProps = dispatch => ({
  handleSetVisibleFilter(filter) {
    const action = dispatch(setFilterAction(filter));
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);