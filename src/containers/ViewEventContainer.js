import { connect } from 'react-redux';
import EventView  from '../screens/ViewEventScreen';

const mapStateToProps = (state, ownProps) => {
  const {events, viewEvent} = state;
  return {
    viewEvent
  }
}

const EventViewContainer = connect(
  mapStateToProps,
  null
)(EventView);


export default EventViewContainer;
