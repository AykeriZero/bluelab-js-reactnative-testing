import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import _ from 'lodash';
import { employeesFetch } from '../actions';
import { Card } from './common';
import EmployeeListItem from './EmployeeListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
  }

  keyExtractor = (item) => item.uid;

  renderRow = ({ item }) => {
    return <EmployeeListItem employee={item} />;
  }

  render() {
    return (
      <Card style={{ flex: 1 }}>
        <FlatList
          data={this.props.employees}
          renderItem={this.renderRow}
          keyExtractor={this.keyExtractor}
        />
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid }; // { shift: 'Monday', name, id: 'sldf2342sd'}
  });

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
