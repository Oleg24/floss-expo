import { connect } from 'react-redux';
import CreateEventView from '../screens/CreateEventScreen';
import { addEvent } from '../actions';

const mapDispatchToProps = (dispatch, state) => {
  return {
    onClick: (newEventData) => {
      dispatch(addEvent(newEventData))
    }
  }
}

const CreateEventContainer = connect(null,mapDispatchToProps)(CreateEventView);

export default CreateEventContainer;
