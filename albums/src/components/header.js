

//import libraries for making a header
import React from 'react';
import { Text, View } from 'react-native';


//make a header
const Header = (props) => (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.headerText}</Text>
    </View>
);

//style of header
const styles = {
  viewStyle: {
    backgroundColor: '#F9F9F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};


//export the component
export default Header;
