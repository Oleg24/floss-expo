import { connect } from 'react-redux';
import EditEvent from '../components/EditEvent';
import { addEvent, updateEvent } from '../actions';

const mapStateToProps = (state, ownProps) => {
  const { events, eventInFocus } = state;
  viewEvent = find(events, e => e.name = eventInFocus.name);
  return {
    event: viewEvent
  }
}

const mapDispatchToProps = (dispatch, state) => {
  return {
    onSubmit: (newEventData) => {
      dispatch(addEvent(newEventData));
    },
    handleUpdateEvent: (event) => {
      dispatch(updateEvent(event));
    }
  }
}

const EditEventContainer = connect(
  mapStateToProps,
  mapDispatchToProps)(EditEvent);

export default EditEventContainer;
