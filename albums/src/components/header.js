

//import libraries for making a component
import React from 'react';
import { Text } from 'react-native';


//make a component
const Header = () => {
  const { textStyle } = styles;
  return <Text style={textStyle}>Albums</Text>;
};

const styles = {
  textStyle: {
    fontSize: 20
  }
};


//export the component
export default Header;
