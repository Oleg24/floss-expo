import { connect } from 'react-redux';
import CreateEventView from '../screens/CreateEventScreen';
import { addEvent, toggleDatePicker, updateEvent } from '../actions';


const mapDispatchToProps = (dispatch, state) => {
  return {
    onClick: (newEventData) => {
      dispatch(addEvent(newEventData));
    },
    toggleDatePicker: (showDatePicker) => {
      dispatch(toggleDatePicker(showDatePicker))
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
    showDatePicker,
    newEvent,
  }
}

const CreateEventContainer = connect(mapStateToProps,mapDispatchToProps)(CreateEventView);

export default CreateEventContainer;
