import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Card} from 'react-native-elements';
import * as firebase from 'firebase';
import Login from "./src/login/Login"
import { FIREBASEAPIKEY } from "./src/components/APIKeys";



export default class App extends React.Component {
  render() {
    var config = {
      apiKey: FIREBASEAPIKEY,
      authDomain: "dayminder-bc7fb.firebaseapp.com",
      databaseURL: "https://dayminder-bc7fb.firebaseio.com",
      projectId: "dayminder-bc7fb",
      storageBucket: "dayminder-bc7fb.appspot.com",
      messagingSenderId: "1015466394311"
    };
    firebase.initializeApp(config);
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
