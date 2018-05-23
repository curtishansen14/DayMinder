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
  Picker,
  StatusBar,
} from "react-native";
import { Header } from 'react-native-elements';
import { TextField } from "react-native-material-textfield";
import { StackNavigator } from "react-navigation";
import { Rating, AirbnbRating } from "react-native-ratings";
import { moment } from 'moment';

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
    choiceFour: "Wake",
    dayRating: 0,
    currentDay = moment().format('dddd'),
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
    return (
      <View style ={styles.background}>
      <StatusBar barStyle= "dark-content" hidden = {false}/>
      <View style={styles.headerView}>
      <Image
                    style = {{width: 30, height: 30, marginTop: 5}} 
                    source = {require('../images/sun.png')}/>
                    <Moment format = "dddd">{this.props.dateToFormat}</Moment>
                    <Image
                    style = {{width: 30, height: 30, marginTop: 5}} 
                    source = {require('../images/sun.png')}/>
        </View>
        <View>
          <View style={styles.calandarView}>
          <Text style={styles.calanderText}> 01. </Text>
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

            <View style={styles.container}>
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
              <Picker
                selectedValue={this.state.choiceFour}
                style={{ height: 50, width: 200 }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ choiceFour: itemValue })
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
        </View>

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
    height: 175,
    justifyContent: "space-evenly"
  },
  containerCentered: {
    flexDirection: "row",
    justifyContent: "center"
  },

  background:{
    backgroundColor: "#ffffff",
  },

  buttonStyle: {
    marginTop: 10,
  },
  rateStyle: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  titleText:{
    fontFamily: 'Georgia',
    fontSize: 30,
    marginTop: 5,
    backgroundColor: '#fc5fd5',
    color: '#ffffff',
    fontFamily: 'Georgia',
    fontWeight: 'bold'
  },
  headerView: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    borderRadius: 4,
    borderWidth: 3,
    borderColor: '#191919',
    backgroundColor: '#fc5fd5',

  },
  calandarView: {
    height: 400,
    borderRadius: 3,
    borderWidth: 3,
    borderColor: '#fc5fd5',
    backgroundColor: '#f8f8f8'
  },
  calanderText: {
    width: 40,
    height: 40,
    borderColor: '#191919',
    borderWidth: 2,
    borderRadius: 4,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#ffffff'
  }

});
