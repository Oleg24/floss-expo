import React, {Component} from 'React';
import {DatePickerIOS, View} from 'react-native';

const DatePicker = ({showDatePicker, onDateChange, date }) {

  _renderDatePicker(){
    if(this.state.showDatePicker){
      return (
          <DatePickerIOS
            date={date}
            mode="date"
            onDateChange={onDateChange}
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
