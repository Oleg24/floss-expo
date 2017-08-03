import React, {Component} from 'React';
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

export default class CreateEvent extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      date: new Date(),
      repeatAnnually: false,
      showDatePicker: false,
      wallPaperSource: null
    };
    this.toggleSelectWallPaper = this._toggleSelectWallPaper.bind(this);
  }

  static navigationOptions = {
    title: 'Create New Event'
  }

  _handleToggleSwitch = () => this.setState(state => ({
    repeatAnnually: !this.state.repeatAnnually
  }));


  _onDateChange = (date) => this.setState(state => ({
    date: date
  }));

  // _toggleDatePicker(){
  //   this.setState({
  //     showDatePicker: !this.state.showDatePicker
  //   })
  // }

  _toggleSelectWallPaper = async() => {
    let result;
    try {
      result = await ImagePicker.launchImageLibraryAsync({
        allowEditing: true,
        aspect: [4, 3]
      });
    } catch (e) {
        result = null;
    }

    if(!result.cancelled){
      this.setState({
        wallPaperSource: result.uri
      });
    }

  }

  _renderDatePicker(){
    if(this.props.showDatePicker){
      return (
          <DatePickerIOS
            date={this.state.date}
            mode="date"
            onDateChange={this._onDateChange}
          />
      )
    } else {
      return null;
    }
  }

  render(){
    const { onClick, toggleDatePicker, showDatePicker } = this.props
    let { wallPaperSource } = this.state;
    return(
      <View>
        <TextInput
          style={styles.input}
          placeholder="Event Name"
          onChangeText={(name) => this.setState({name})}
        />
        <View style={styles.eventDetailsContainer}>
          <View style={styles.itemContainer}>
            <Text>Repeat Annually</Text>
            <Switch
              onValueChange={this._handleToggleSwitch}
              value={this.state.repeatAnnually}
            />
          </View>
          <TouchableOpacity onPress={e => {
            e.preventDefault()
            toggleDatePicker(showDatePicker)
          }}>
            <View style={styles.itemContainer}>
              <Text>Select Date</Text>
              <Text>{this.state.date.toLocaleDateString()}</Text>
            </View>
          </TouchableOpacity>
          <View>
            {this._renderDatePicker()}
          </View>
        </View>
        <View style={styles.eventDetailsContainer}>
          <TouchableOpacity onPress={this.toggleSelectWallPaper}>
            <View style={styles.itemContainer}>
              <Text>Wallpaper</Text>
              { this.state.wallPaperSource  ?
                <Image source={{ uri: wallPaperSource }} style={{ width: 100, height: 100 }}/>
                 : null
              }
            </View>
          </TouchableOpacity>
        </View>
        <Button
          style={styles.submitBtn}
          onPress={e => {
            e.preventDefault()
            if(!this.state.name.trim()){
              return
            }
            onClick(this.state)
          }}
          color="#1e90ff"
          title="Create Event"
        />
    </View>
    )
  }
}

CreateEvent.propTypes = {
  onClick: PropTypes.func.isRequired
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
