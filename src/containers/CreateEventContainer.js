import { connect } from 'react-redux';
import EditEvent from '../components/EditEvent';
import { addEvent, toggleDatePicker, updateEvent } from '../actions';


const mapDispatchToProps = (dispatch, state) => {
  return {
    onSubmit: (newEventData) => {
      dispatch(addEvent(newEventData));
    },
    toggleDatePicker: () => {
      dispatch(toggleDatePicker())
    },
    handleUpdateEvent: (event) => {
      dispatch(updateEvent(event));
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const { showDatePicker, newEvent } = state
  return {
    ownProps,
    event: newEvent,
  }
}

const CreateEventContainer = connect(
  mapStateToProps,
  mapDispatchToProps)(EditEvent);

export default CreateEventContainer;
