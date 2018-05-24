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
//import {Bar} from 'react-chartjs-2';


//const data = {
//  labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
//  datasets: [
//    {
//      label: 'First Attempt',
//      backgroundColor: "#f8f8f8",
//      borderColor: '#c71585',
//      borderWidth: 1,
//      data: [1,2,3,4,5,6,7] 
//    }
//  ]
//};

export default class Stats extends React.Component {


  render() {
    console.log("Stats");
    return (
      <View>
        <View style={styles.headerView}>
          <Image
            style={{ width: 30, height: 30, marginTop: 5 }}
            source={require("../images/sun.png")}
          />
          <Text style={styles.titleText}>Weekly</Text>
          <Image
            style={{ width: 30, height: 30, marginTop: 5 }}
            source={require("../images/sun.png")}
          />
        </View>
        <View style={styles.calandarView}>
        <Bar data={data}
        width={100}
        height={50}/>
      </View>

        <View style={styles.headerView}>
          <Image
            style={{ width: 30, height: 30, marginTop: 5 }}
            source={require("../images/sun.png")}
          />
          <Text style={styles.titleText}>90 day</Text>
          <Image
            style={{ width: 30, height: 30, marginTop: 5 }}
            source={require("../images/sun.png")}
          />
        </View>
        <View style={styles.calandarView} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 175,
    justifyContent: "space-evenly"
  },
  titleText: {
    fontFamily: "Georgia",
    fontSize: 30,
    marginTop: 5,
    backgroundColor: "#009a00",
    color: "#ffffff",
    fontFamily: "Georgia",
    fontWeight: "bold"
  },
  headerView: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    borderRadius: 4,
    borderWidth: 3,
    borderColor: "#009a00",
    backgroundColor: "#009a00"
  },
  calandarView: {
    height: 232,
    borderRadius: 3,
    borderWidth: 3,
    borderColor: "#009a00",
    backgroundColor: "#f8f8f8"
  },
  calanderText: {
    width: 40,
    height: 40,
    borderColor: "#191919",
    borderWidth: 2,
    borderRadius: 4,
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#ffffff"
  }
});
