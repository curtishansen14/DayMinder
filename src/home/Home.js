import React from "react";
import * as firebase from "firebase";
import {
 View,
 Button,
 Text,
 StyleSheet,
 TextInput,
 Image,
 KeyboardAvoidingView,
 TouchableWithoutFeedback,
 Keyboard
} from "react-native";
import { TextField } from "react-native-material-textfield";
import { StackNavigator } from "react-navigation";

export default class Home extends React.Component {
 render() {
   console.log("Hello Dylan");
   return (
     <View>
       <Text>This little piggy went home</Text>
     </View>
   );
 }
}