import { connect } from 'react-redux';
import TouchableEvent from '../components/TouchableEvent';
import {viewEvent} from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    ownProps
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (event)=> {
      dispatch(viewEvent(event));
    }
  }
}

const CreateEventContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TouchableEvent);

export default CreateEventContainer;
