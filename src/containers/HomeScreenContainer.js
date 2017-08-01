import {connect } from 'react-redux';
import HomeScreen from '../screens/HomeScreen';

const mapStateToProps = state =>{
  return {
    events: state.events
  }
}

const HomeScreenContainer = connect(mapStateToProps)(HomeScreen);

export default HomeScreenContainer;
