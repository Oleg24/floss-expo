import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Event from '../components/Event';
import Header from '../components/Header';
import PropTypes from 'prop-types';

export default class HomeScreen extends React.Component {
  constructor(props){
    super();
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

    return (
      <View style={styles.container}>
        <Button
          onPress={() => navigation.dispatch({type: 'CreateEvent'})}
          title="Create An Event"
        />
        <View style={styles.eventContainer}>
        {events.map(event =>{
          return (<Event key={event.name}
            name={event.name}
            countdown={event.countdown}
            wallPaperSource={event.wallPaperSource}
          />)
        })}
        </View>
      </View>
    );
  }
}

HomeScreen.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      // countdown: PropTypes.number.isRequired,
      repeatAnnually: PropTypes.bool.isRequired,
      wallPaperSource: PropTypes.string
    }).isRequired
  ).isRequired
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
