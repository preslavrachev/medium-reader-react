// Intro.js
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
  },
  instructions: {
    color: '#333333',
    marginBottom: 5,
    textAlign: 'center',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
});

export default class Intro extends Component {

  constructor() {
    super();
    this.state = {
      title: "foo"
    }

    console.log('calling fetch!');
    fetch('', {})
      .then(response => response.text())
      .then(stringResponse => this.setState({ title: stringResponse }))
      .catch(error => console.log(`Error: ${error}`));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native:{this.state.title} 
        </Text>
        <Text style={styles.instructions}>
          This is a React Native snapshot test.
        </Text>
      </View>
    );
  }
}