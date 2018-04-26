import React from "react";
import * as firebase from "firebase";
import {
  View,
  Button,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Picker
} from "react-native";
import { TextField } from "react-native-material-textfield";
import { StackNavigator } from "react-navigation";
import { Rating, AirbnbRating } from "react-native-ratings";

async function getUserName() {
  const {currentUser} = await firebase.auth();
  console.log(currentUser);
  let result = currentUser.uid;
  console.log(result);
  return result;
  
}


export default class Home extends React.Component {
  state = {
    choiceOne: "Wake",
    choiceTwo: "Wake",
    choiceThree: "Wake",
    dayRating: 0
  };

  async onPress() {
    const { choiceOne, choiceTwo, choiceThree, rating } = this.state;
    console.log("Submitted");
    var db = firebase.database();
    let today = Date.now();
    let userID = await getUserName();
    db.ref('users/' + userID + 'days/' + today).set({
      day: this.state
    });
  }

  ratingCompleted(rating){
    this.setState({dayRating: rating})
    console.log('state' + this.state.rating);
  }

  render() {
    console.log("Hello Dylan");

    return (
      <View>
        <ImageBackground
          style={{ width: "100%" }}
          source={require("../images/DayMinder_Sunset.png")}
        >
          <Text style={styles.titleText}>What did you do today?</Text>
          <View>
            <View style={styles.container}>
              <Picker
                selectedValue={this.state.choiceOne}
                style={{ height: 50, width: 200 }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ choiceOne: itemValue })
                }
              >
                <Picker.Item label="Up Early" value="Wake" />
                <Picker.Item label="Bed on time" value="Sleep" />
                <Picker.Item label="Socialized" value="Soc" />
                <Picker.Item label="Cooked" value="Cook" />
                <Picker.Item label="Worked >8hr" value="OverWork" />
                <Picker.Item label="Exercised" value="Exercise" />
                <Picker.Item label="Read" value="Read" />
                <Picker.Item label="Played Game" value="Game" />
                <Picker.Item label="Played Instrument" value="Music" />
                <Picker.Item label="Wrote" value="Write" />
                <Picker.Item label="Watched TV" value="TV" />
              </Picker>
              <Picker
                selectedValue={this.state.choiceTwo}
                style={{ height: 50, width: 200 }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ choiceTwo: itemValue })
                }
              >
                <Picker.Item label="Up Early" value="Wake" />
                <Picker.Item label="Bed on time" value="Sleep" />
                <Picker.Item label="Socialized" value="Soc" />
                <Picker.Item label="Cooked" value="Cook" />
                <Picker.Item label="Worked >8hr" value="OverWork" />
                <Picker.Item label="Exercised" value="Exercise" />
                <Picker.Item label="Read" value="Read" />
                <Picker.Item label="Played Game" value="Game" />
                <Picker.Item label="Played Instrument" value="Music" />
                <Picker.Item label="Wrote" value="Write" />
                <Picker.Item label="Watched TV" value="TV" />
              </Picker>
            </View>

            <View style={styles.containerCentered}>
              <Picker
                selectedValue={this.state.choiceThree}
                style={{ height: 50, width: 200 }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ choiceThree: itemValue })
                }
              >
                <Picker.Item label="Up Early" value="Wake" />
                <Picker.Item label="Bed on time" value="Sleep" />
                <Picker.Item label="Socialized" value="Soc" />
                <Picker.Item label="Cooked" value="Cook" />
                <Picker.Item label="Worked >8hr" value="OverWork" />
                <Picker.Item label="Exercised" value="Exercise" />
                <Picker.Item label="Read" value="Read" />
                <Picker.Item label="Played Game" value="Game" />
                <Picker.Item label="Played Instrument" value="Music" />
                <Picker.Item label="Wrote" value="Write" />
                <Picker.Item label="Watched TV" value="TV" />
              </Picker>
            </View>
          </View>
        </ImageBackground>

        <View style={styles.rateStyle}>
          <Rating
            type="heart"
            ratingCount={7}
            imageSize={45}
            onFinishRating={this.ratingCompleted.bind(this)}
          />
        </View>

        <View style={styles.buttonStyle}>
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

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 200,
    justifyContent: "space-between"
  },
  containerCentered: {
    flexDirection: "row",
    height: 200,
    justifyContent: "center"
  },

  buttonStyle: {
    marginTop: 10
  },
  rateStyle: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  titleText:{
    fontFamily: 'Georgia',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#009a00'}
});
