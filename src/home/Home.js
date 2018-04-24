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
  Keyboard,
  Picker
} from "react-native";
import { TextField } from "react-native-material-textfield";
import { StackNavigator } from "react-navigation";

export default class Home extends React.Component {
  state = {
    choiceOne: "JavaScript",
    choiceTwo: "",
    choiceThree: ""
  };

  onPress() {
    const { choiceOne, choiceTwo, choiceThree } = this.state;
    console.log("Submitted");
  }

  render() {
    console.log("Hello Dylan");

    return (
      <View>
        <Text>Hello</Text>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              flex: 1
            }}
          >
            <Picker
              selectedValue={this.state.choiceOne}
              style={{ height: 50, width: 100 }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ choiceOne: itemValue })
              }
            >
              <Picker.Item label="Slept A Jillion Hours" value="java" />
              <Picker.Item label="Party" value="js" />
              <Picker.Item label="Socialized" value="Soc" />
            </Picker>
            <Picker
              selectedValue={this.state.choiceTwo}
              style={{ height: 50, width: 100 }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ choiceTwo: itemValue })
              }
            >
              <Picker.Item label="Slept A Jillion Hours" value="java" />
              <Picker.Item label="Party" value="js" />
              <Picker.Item label="Socialized" value="Soc" />
              <Picker.Item label="Socialized" value="Soc" />
              <Picker.Item label="Socialized" value="Soc" />
              <Picker.Item label="Socialized" value="Soc" />
              <Picker.Item label="Socialized" value="Soc" />
              <Picker.Item label="Socialized" value="Soc" />
            </Picker>
            <Picker
              selectedValue={this.state.choiceThree}
              style={{ height: 50, width: 100 }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ choiceThree: itemValue })
              }
            >
              <Picker.Item label="Slept A Jillion Hours" value="java" />
              <Picker.Item label="Party" value="js" />
              <Picker.Item label="Socialized" value="Soc" />
            </Picker>
          </View>

          <Button
            title="Submit"
            color="#009a00"
            onPress={this.onPress.bind(this)}
          />
        </View>
      </View>
    );
  }
}
