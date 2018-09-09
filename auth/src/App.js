import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import config from './config.js';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
      </View>
    );
  }
}

export default App;
