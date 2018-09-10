import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import { Header, Button, Card, CardSection, Spinner
  } from './components/common';
import config from './config.js';

class App extends Component {
  state = { isLoggedIn: null };

  componentWillMount() {
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ isLoggedIn: true });
      } else {
        this.setState({ isLoggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.isLoggedIn) {
      case true:
        return (
          <Card><CardSection>
            <Button
              onPress={() => firebase.auth().signOut()}
            >Log out</Button>
          </CardSection></Card>
        );
    case false:
        return (
          <LoginForm />
        );
    default:
        return (
          <Card><CardSection>
              <Spinner />
          </CardSection></Card>
        );
    }
}

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
