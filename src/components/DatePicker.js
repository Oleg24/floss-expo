import React, {Component} from 'React';
import {DatePickerIOS, View} from 'react-native';

export default class DatePicker extends Component {


  _onDateChange = (date) => {
    this.props.onDateChange(date, this.props.eventBeingCreated);
  }


  _renderDatePicker(){
    const {showDatePicker, onDateChange, eventBeingCreated } = this.props;
    console.log('funct',onDateChange)
    if(showDatePicker){
      return (
          <DatePickerIOS
            date={eventBeingCreated.date}
            mode="date"
            onDateChange={this._onDateChange}
          />
      )
    } else {
      return null;
    }
  }

  render(){
    return(
      <View>
        {this._renderDatePicker()}
      </View>
    )
  }

}
