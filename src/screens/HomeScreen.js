import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Event from '../containers/EventContainer';
import Header from '../components/Header';
import PropTypes from 'prop-types';

export default class HomeScreen extends React.Component {
  constructor(props){
    super();
  }

  static navigationOptions = {
    title: 'Hour Glass'
  }

  render() {
    const { navigation } = this.props;
    const { events } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.eventContainer}>
        {events.map(event =>{
          return (<Event key={event.name}
            name={event.name}
            date={event.date}
            wallPaperSource={event.wallPaperSource}
          />)
        })}
        </View>
        <Button
          onPress={() => navigation.dispatch({type: 'CREATE_EVENT'})}
          title="Add Event"
        />
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
    flexDirection: 'column'
  },
  eventContainer: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'stretch',
    height: '90%'
  }
});
