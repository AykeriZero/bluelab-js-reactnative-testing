import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
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
        <LoginForm />
      </View>
    );
  }
}

export default App;
