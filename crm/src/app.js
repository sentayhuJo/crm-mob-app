/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
  } from 'react-native';
import firebase from 'firebase';
import Login from './Login';

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
},
});

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp ({
      apiKey: "AIzaSyBpBkA6fJwSOreQ1ml_n5Zrez55EQ2IYDE",
      authDomain: "crmlinkdin.firebaseapp.com",
      databaseURL: "https://crmlinkdin.firebaseio.com",
      projectId: "crmlinkdin",
      storageBucket: "crmlinkdin.appspot.com",
      messagingSenderId: "932098210961"
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Login />
      </View>
    );
  }
}


