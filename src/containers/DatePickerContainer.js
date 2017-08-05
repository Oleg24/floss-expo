import { connect} from 'react-redux';
import DatePicker from '../components/DatePicker';
import { updateDate } from '../actions';

const mapStateToProps =  (state, ownProps) => {
  const { eventBeingCreated, showDatePicker} = state
  return {
    event: eventBeingCreated,
    showDatePicker
  }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
  return {
    onDateChange: (newDate, event)=>{
      dispatch(updateDate(newDate, event))
    }
  }
}

const DatePickerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DatePicker);

export default DatePickerContainer;
