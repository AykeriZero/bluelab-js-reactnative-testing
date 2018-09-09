import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {

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
