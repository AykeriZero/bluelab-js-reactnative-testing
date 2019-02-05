import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { text } from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { Card, CardSection, Button, Confirm } from './common';
import { employeeUpdate, employeeSave, fireEmployee } from '../actions';

class EmployeeEdit extends Component {
  state = { showModal: false };

  componentWillMount() {
    _.each(this.props.employee,
      (value, prop) => this.props.employeeUpdate({ prop, value })
    );
  }

  onButtonPress() {
    //current values inside the form
    const { name, phone, shift } = this.props;

    //this.props.employee are the values for the currently selected employee
    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
  }

  onTextPress() {
    const { phone, shift } = this.props.employee;

    text(phone, `Your upcoming shift is on ${shift}`);
  }

  toggleConfirm() {
    this.setState({ showModal: !this.state.showModal });
  }

  fireEmployee() {
    const { name, phone, uid } = this.props.employee;

    this.props.fireEmployee(uid);
    text(phone, `You have been fired, ${name}`);
  }

  render() {
    return (
      <Card>
        <EmployeeForm />

        <CardSection>
          <Button
            onPress={this.onButtonPress.bind(this)}
          >
            Save
          </Button>
        </CardSection>

        <CardSection>
          <Button
            onPress={this.onTextPress.bind(this)}
          >
            Text Schedule
          </Button>
        </CardSection>

        <CardSection>
          <Button
            onPress={this.toggleConfirm.bind(this)}
          >
            Fire Employee
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onDecline={this.toggleConfirm.bind(this)}
          onAccept={this.fireEmployee.bind(this)}
        >
          Are you sure you want to fire {this.props.employee.name}?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeSave,
  fireEmployee
})(EmployeeEdit);
