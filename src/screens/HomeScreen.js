import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Event from '../components/Event';
import Header from '../components/Header';

export default class HomeScreen extends React.Component {
  constructor(props){
    super();
    this.state = {
    };
    this.addEventCallback = this._addEvent.bind(this);
    
  }

  static navigationOptions = {
    title: 'Hour Glass'
  }

  _addEvent(event){
    this.setState({
      events: this.state.events.push(event)
    });
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Button
          onPress={() => navigation.dispatch({type: 'CreateEvent'})}
          title="Create"
        />
        <View style={styles.eventContainer}>
        {/* {this.state.events.map(event =>{
          return (<Event key={event.name} name={event.name} countdown={event.countdown}/>)
        })} */}
        <Text>Hi</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
  eventContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
