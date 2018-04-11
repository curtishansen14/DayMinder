import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-elements";
import * as firebase from "firebase";
import Login from "./src/login/Login";
import Home from "./src/home/Home";
import Prescription from "./src/prescription/Prescription";
import Stats from "./src/stats/Stats";
import account from "./src/account/Account";
import { FIREBASEAPIKEY } from "./src/components/APIKeys";
import { StackNavigator } from "react-navigation";
import { NavigationBar } from "react-native-navbar";
import { TabNavigator, TabBarBottom } from "react-navigation";
import Ionicons from 'react'

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
    return <Router />;
    //return <Tabs/>
  }
}

//TODO: Get Navigation bar

// const Tabs = TabNavigator(
//   {
//     Login: { screen: Login },
//     Home: { screen: Home },
//     Stats: { screen: Stats },
//     Prescription: { screen: Prescription },
//     Acct: { screen: account }
// },
// {
//   navigationOptions: ({navigation}) => ({
//     tabBarIcon: ({focus, tintColor}) => {
//       const {routeName} = navigation.state;
//       let iconName;
//       if (routeName === 'Home') {
//         iconName = `ios-information-circle${focused ? '' : '-outline'}`;
//       } else if (routeName === 'Stats') {
//         iconName = `ios-options${focused ? '' : '-outline'}`;
//       }

//       return <Ionicons name ={iconName} size ={25} color={tintColor}/>;

//     },
//   }),
//   tabBarOptions: {
//     activeTintColor: 'tomato',
//     inactiveTintColor: 'gray'
//   },
//   tabBarComponent: TabBarBottom,
//   tabBarPosition: 'bottom',
//   animationEnabled: false,
//   swipeEnabled: false,
// }

// );

const Router = StackNavigator({
  Login: { screen: Login },
  Home: { screen: Home },
  Stats: { screen: Stats },
  Prescription: { screen: Prescription },
  Acct: { screen: account }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
