import {connect } from 'react-redux';
import HomeScreen from '../screens/HomeScreen';

const mapStateToProps = state => {
  const { events } = state;
  return {
    events
  }
}

const HomeScreenContainer = connect(mapStateToProps)(HomeScreen);

export default HomeScreenContainer;
