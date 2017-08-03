import { connect } from 'react-redux';
import EventView  from '../screens/ViewEventScreen';

const mapStateToProps = (state, ownProps) => {
  const {events, viewEvent} = state;
  console.log('yo viewEvent', viewEvent)

  return {
    viewEvent
  }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     ownProps
//   }
// }

const EventViewContainer = connect(
  mapStateToProps,
  null
)(EventView);


export default EventViewContainer;
