import React from 'react';
import {AppRegistry, SafeAreaView} from 'react-native';
import {name as appName} from './app.json';

import {Provider} from 'react-redux';
import Navigation from './app/navigation/Navigation';
import configureStore from './app/redux/Store';
import Colors from './app/theme/Colors';

const store = configureStore();

const root = () => (
  <Provider store={store}>
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
      <Navigation />
    </SafeAreaView>
  </Provider>
);

AppRegistry.registerComponent(appName, () => root);
