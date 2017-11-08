import React, {Component} from 'react';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import AppReducer from './src/reducers';
import AppWithNavigationState from './src/navigators/AppNavigator';

export default class App extends Component {
  store = createStore(
    AppReducer,
    applyMiddleware(logger)
  );

  render(){
    return (
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}
