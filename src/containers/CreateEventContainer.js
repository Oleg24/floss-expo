import { connect } from 'react-redux';
import CreateEvent from '../screens/CreateEventScreen';
import { addEvent } from '../actions';

const mapDispatchToProps = (dispatch, state, something) => {
  return {
    onClick: (input) => {
      dispatch(addEvent(input))
    }
  }
}

const CreateEventContainer = connect(null,mapDispatchToProps)(CreateEvent);

export default CreateEventContainer;
