/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';
import {Navigation} from './src/navigation/Navigation';
import formReducer from './src/store/reducers/form';

const rootReducer = combineReducers({
  form: formReducer,
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <SafeAreaProvider>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
