import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Event from '../components/Event';
import Header from '../components/Header';

export default class HomeScreen extends React.Component {
  constructor(props){
    super();
    this.state = {
      events: [{
        name: 'my birthday',
        countdown: 12
      },{
        name: 'ukraine trip',
        countdown: 39
      }, {
        name: 'visit dublin office',
        countdown: 52
      }]
    }
  }

  static navigationOptions = {
    title: 'Hour Glass'
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button
          onPress={() => navigate('CreateEvent')}
          title="Create"
        />
        <View style={styles.eventContainer}>
        {this.state.events.map(event =>{
          return (<Event key={event.name} name={event.name} countdown={event.countdown}/>)
        })}
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
