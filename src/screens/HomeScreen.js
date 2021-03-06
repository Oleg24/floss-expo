import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Event from '../containers/EventContainer';
import PropTypes from 'prop-types';

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Hour Glass'
  }

  render() {
    const { navigation, events } = this.props;
    return (
      <View style={styles.container}>
        {/* <Text>{JSON.stringify(events, null, 4)}</Text> */}
        <View style={styles.eventContainer}>
          {events.map(event =>
            <Event key={event.name}
              name={event.name}
              date={event.date}
              wallPaperSource={event.wallPaperSource}
            />
          )}
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
      date: PropTypes.instanceOf(Date).isRequired,
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
