import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import CreateEvent from '../screens/CreateEventScreen';

export const AppNavigator = StackNavigator({
  Home: { screen: HomeScreen},
  CreateEvent: { screen: CreateEvent}
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav})} />
);

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);
