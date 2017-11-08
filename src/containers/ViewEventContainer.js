import { connect } from 'react-redux';
import EventView  from '../screens/ViewEventScreen';
import { find } from 'lodash';

const mapStateToProps = (state, ownProps) => {
  const {events, eventInFocus } = state;
  viewEvent = find(events, e => e.name = eventInFocus.name);
  return {
    viewEvent
  }
}

const EventViewContainer = connect(
  mapStateToProps,
  null
)(EventView);


export default EventViewContainer;
