import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Button } from './Button';

class App extends Component {
  state = { isGreen: true }

  renderContent() {
    switch (this.state.isGreen) {
      case true:
        return (
          <View style={{ backgroundColor: 'green', height: 200 }} />
        );
      case false:
        return (
          <View style={{ backgroundColor: 'red', height: 200 }} />
        );
      default:
        return (
          <View style={{ backgroundColor: 'green', height: 200 }} />
        );
      }
  }

  render() {
    return (
      <View style={{ flex:1 }}>
        {this.renderContent()}
        <TouchableOpacity
          onPress={() => this.setState({ isGreen: !this.state.isGreen })}
          style={styles.buttonStyle}
        >
          <Text style={styles.buttonTextStyle}>Hello World!</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = {
  buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
  },
    buttonTextStyle: {
      alignSelf: 'center',
      color: '#007aff',
      fontSize: 16,
      fontWeight: '600',
      paddingTop: 10,
      paddingBottom: 10
    }

};

export default App;
