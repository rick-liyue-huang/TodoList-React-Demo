
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import { setFilterAction } from '../actions';
 
const mapStateToProps = state => ({
  filter: state.filter
});

const mapDispatchToProps = dispatch => ({
  handleSetVisibility: filter => dispatch(setFilterAction(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);