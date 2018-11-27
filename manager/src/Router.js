import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>

        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Login" />
        </Scene>

        <Scene key="main">
          <Scene
            key="employee_list"
            component={EmployeeList}
            title="Employees"
            initial
            rightTitle="Add"
            onRight={() => Actions.employee_create()}
            initial
          />
          <Scene key="employee_create" component={EmployeeCreate} title="Create Employee" />
        </Scene>

      </Scene>
    </Router>
  );
};

export default RouterComponent;
