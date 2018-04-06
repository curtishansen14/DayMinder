import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Card} from 'react-native-elements';
import * as firebase from 'firebase';
import Login from "./src/login/Login"



export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Login/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
