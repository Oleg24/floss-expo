import { connect } from 'react-redux';
import CreateEventView from '../screens/CreateEventScreen';
import { addEvent, toggleDatePicker } from '../actions';


const mapDispatchToProps = (dispatch, state) => {
  return {
    onClick: (newEventData) => {
      dispatch(addEvent(newEventData))
    },
    toggleDatePicker: (showDatePicker) => {
      dispatch(toggleDatePicker(showDatePicker))
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const { showDatePicker } = state
  return {
    ownProps,
    showDatePicker
  }
}

const CreateEventContainer = connect(mapStateToProps,mapDispatchToProps)(CreateEventView);

export default CreateEventContainer;
