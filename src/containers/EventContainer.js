import { connect} from 'react-redux';
import Event from '../components/Event';
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
)(Event);

export default CreateEventContainer;
