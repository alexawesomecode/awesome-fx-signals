import { connect } from 'react-redux';
import DisplayApp from './DisplayApp';

const mapStateToProps = state => ({
  filters: state.filters, prices: state.prices,
});
export default connect(mapStateToProps, null)(DisplayApp);
