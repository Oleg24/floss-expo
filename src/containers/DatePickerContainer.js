import { connect} from 'react-redux';
import DatePicker from '../components/DatePicker';
import { updateDate } from '../actions';

const mapStateToProps =  (state, ownProps) => {
  return {
    event: state.event
  }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
  return {
    onDateChange: (newDate)=>{
      dispatch(updateDate(newDate))
    }
  }
}

const mapDispatchToProps
