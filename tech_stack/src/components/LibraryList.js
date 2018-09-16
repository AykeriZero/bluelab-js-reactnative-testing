//component for rendering data

import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Card } from './common';
import ListItem from './ListItem';

class LibraryList extends Component {
  renderItem({ item }) {
    return <ListItem library={item} />;
  }

  render() {
    return (
      <Card>
        <FlatList
          data={this.props.libraries}
          renderItem={this.renderItem}
          keyExtractor={(library) => library.id.toString()}
        />
      </Card>
    );
  }
}

const mapStateToProps = (state) => ({ libraries: state.libraries });

export default connect(mapStateToProps)(LibraryList);
