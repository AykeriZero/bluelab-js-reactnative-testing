//AlbumDetail component to display album details after http request

//import libraries
import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image } = album;
  const { thumbnailStyle, headerTextStyle } = styles;

  return (
    <Card>
      <CardSection>

        <View>
          <Image
            source={{ uri: thumbnail_image }}
            style={thumbnailStyle}
          />
        </View>

        <View style={headerTextStyle} >
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>

      </CardSection>
    </Card>
  );
};

const styles = {

  headerTextStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },

  thumbnailStyle: {
    height: 50,
    width: 50
  }

};

export default AlbumDetail;
