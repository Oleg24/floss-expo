import React, {Component} from 'React';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Switch,
  Image,
  DatePickerIOS,
  TouchableOpacity
} from 'react-native';
import { ImagePicker } from 'expo';

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
    this.toggleDatePicker = this._toggleDatePicker.bind(this);
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

  _toggleDatePicker(){
    this.setState({
      showDatePicker: !this.state.showDatePicker
    })
  }

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

    console.log('result', result);

    if(!result.cancelled){
      this.setState({
        wallPaperSource: result.uri
      });
    }

  }

  _renderDatePicker(){
    if(this.state.showDatePicker){
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
    let { wallPaperSource } = this.state
    return(
      <View>
        <TextInput
          style={styles.input}
          placeholder="Event Name"
          onChangeText={(name) => this.setState({name})}
        />
        <Switch
          onValueChange={this._handleToggleSwitch}
          value={this.state.repeatAnnually}
        />
        <TouchableOpacity onPress={this.toggleDatePicker}>
          <Text>
            {this.state.date.toLocaleDateString()}
          </Text>
        </TouchableOpacity>
        <View>
          {this._renderDatePicker()}
        </View>
        <TouchableOpacity onPress={this.toggleSelectWallPaper}>
          <View>
          { this.state.wallPaperSource === null ? <Text>Select a Wallpaper</Text> :
            <Image source={{ uri: wallPaperSource }} style={{ width: 200, height: 200 }} />
          }
          </View>
        </TouchableOpacity>

    </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    backgroundColor: 'salmon'
  },
  wallPaperImage: {
    width: 200,
    height: 200
  }
});
