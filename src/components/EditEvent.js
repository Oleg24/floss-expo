import React from 'React';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Switch,
  Image,
  DatePickerIOS,
  TouchableOpacity
} from 'react-native';
import { ImagePicker } from 'expo';
import PropTypes from 'prop-types';

const EditEvent = ({
  event,
  onSubmit,
  handleUpdateEvent,
  toggleDatePicker
}) => {
  _renderDatePicker = () => {
    if(event.showDatePicker){
      return (
          <DatePickerIOS
            date={event.date}
            mode="date"
            onDateChange={(date) => handleUpdateEvent({['date']: date})}
          />
      )
    } else {
      return null;
    }
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Event Name"
        value={event.name}
        onChangeText={(value) => handleUpdateEvent({['name']: value})}
      />
      <View style={styles.eventDetailsContainer}>
        <View style={styles.itemContainer}>
          <Text>Repeat Annually</Text>
          <Switch
            onValueChange={() => handleUpdateEvent({'repeatAnnually': !event.repeatAnnually})}
            value={event.repeatAnnually}
          />
        </View>
        <TouchableOpacity onPress={e => {
          e.preventDefault();
          toggleDatePicker();
        }}>
          <View style={styles.itemContainer}>
            <Text>Select Date</Text>
            <Text>{event.date.toLocaleDateString()}</Text>
          </View>
        </TouchableOpacity>
        <View>
          {_renderDatePicker()}
        </View>
        <Button
          style={styles.submitBtn}
          onPress={e => {
            e.preventDefault()
            if(!event.name.trim()){
              return
            }
            onSubmit(event)
          }}
          color="#1e90ff"
          title="Create Event"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    padding: 10,
    textAlign: 'center',
    backgroundColor: 'white'
  },
  eventDetailsContainer: {
    marginTop: 20,
    backgroundColor: 'white',
    padding: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10
  },
  wallPaperImage: {
    width: 200,
    height: 200
  }
});

export default EditEvent;
