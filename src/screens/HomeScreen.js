import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Event from '../components/Event';
import Header from '../components/Header';
import {connect } from 'react-redux';

class HomeScreen extends React.Component {
  constructor(props){
    super();
    this.state = {};
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
    const { events } = this.props;

    console.log(this.props);
    console.log('EVENTS',events);
    return (
      <View style={styles.container}>
        <Button
          onPress={() => navigation.dispatch({type: 'CreateEvent'})}
          title="Create"
        />
        <View style={styles.eventContainer}>
        {events.map(event =>{
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

const mapStateToProps = state =>{
  return {
    events: state.events
  }
}

const HomeScreenWithProps = connect(mapStateToProps)(HomeScreen)


export default HomeScreenWithProps;
