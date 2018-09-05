//AlbumDetail component to display album details after http request

//import libraries
import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const {
    thumbnailStyle,
    headerTextStyle,
    headerTitleStyle,
    thumbnailContainterStyle,
    imageStyle
  } = styles;

  return (
    <Card>

      <CardSection>

        <View style={thumbnailContainterStyle}>
          <Image
            source={{ uri: thumbnail_image }}
            style={thumbnailStyle}
          />
        </View>

        <View style={headerTextStyle} >
          <Text style={headerTitleStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>

      </CardSection>

      <CardSection>
        <Image
          source={{ uri: image }}
          style={imageStyle}
        />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)} >
          Buy Now
        </Button>
      </CardSection>

    </Card>
  );
};

const styles = {

  headerTextStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },

  headerTitleStyle: {
    fontSize: 18
  },

  thumbnailStyle: {
    height: 50,
    width: 50
  },

  thumbnailContainterStyle: {
    justifyContent: 'center',
  //  marginLeft: 10,
    marginRight: 10
  },

  imageStyle: {
    height: 350,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
