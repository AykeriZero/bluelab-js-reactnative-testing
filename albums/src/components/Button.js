import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = () => (
    <TouchableOpacity style={styles.buttonStyle}>
      <Text style={styles.buttonTextStyle}>Click me!</Text>
    </TouchableOpacity>
);

const styles = {

  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
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

export default Button;
