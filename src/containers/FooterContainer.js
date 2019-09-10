
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import { setFilterAction } from '../actions';
import { getFilter } from '../selectors';

const mapStateToProps = state => ({
  // filter: state.filter
  filter: getFilter(state)
});

const mapDispatchToProps = dispatch => ({
  handleSetVisibility: filter => dispatch(setFilterAction(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);