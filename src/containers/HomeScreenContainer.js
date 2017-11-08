import {connect } from 'react-redux';
import HomeScreen from '../screens/HomeScreen';

const mapStateToProps = state => {
  const { events } = state;
  console.log('homescreen', events);
  return {
    events
  }
}

const HomeScreenContainer = connect(mapStateToProps)(HomeScreen);

export default HomeScreenContainer;
