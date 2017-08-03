import { connect} from 'react-redux';
import TouchableEvent from '../components/TouchableEvent';
import {viewEvent} from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    ownProps,
    events: state.events
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (event, events)=> {
      dispatch(viewEvent(event, events));
    }
  }
}

const CreateEventContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TouchableEvent);

export default CreateEventContainer;
