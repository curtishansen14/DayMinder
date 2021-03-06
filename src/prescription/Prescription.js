import React from 'react'
import * as firebase from 'firebase'
import { View, Button, Text, StyleSheet, TextInput, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import {TextField} from 'react-native-material-textfield'
import {StackNavigator,} from 'react-navigation'
import {getUserName} from '../home/Home'

export default class Prescription extends React.Component{

async readFirebase(path){
    var data = await firebase
    .database()
    .ref(path)
    .once('value')
    .then(function(dataSnapShot){
        value = dataSnapShot.val();
    });
    return value;
}

async getUsersData(){
    var userName = await getUserName()
    var userDate = await this.readFirebase("users/" + userName)

    return userDate;
}

async getUserDayRatings(){
    let data = await getUsersData()
    
    
}
    render(){
        console.log('Prescription')
        return(
            <View>
            <View style={styles.headerView}>
            <Image
                    style = {{width: 30, height: 30, marginTop: 5}} 
                    source = {require('../images/sun.png')}/>
                    <Text style={styles.titleText}>Your Best Days</Text>
                    <Image
                    style = {{width: 30, height: 30, marginTop: 5}} 
                    source = {require('../images/sun.png')}/>
            </View>
                <View style ={styles.calandarView}>
            
                </View>
                <View style={styles.headerView}>
            <Image
                    style = {{width: 30, height: 30, marginTop: 5}} 
                    source = {require('../images/sun.png')}/>
                    <Text style={styles.titleText}>Your Worst Days</Text>
                    <Image
                    style = {{width: 30, height: 30, marginTop: 5}} 
                    source = {require('../images/sun.png')}/>
            </View>
                <View style ={styles.calandarView}>
            
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
      titleText:{
        fontFamily: 'Georgia',
        fontSize: 30,
        marginTop: 5,
        backgroundColor: "#009a00",
        color: '#ffffff',
        fontFamily: 'Georgia',
        fontWeight: 'bold'
      },
      headerView: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        borderRadius: 4,
        borderWidth: 3,
        borderColor: "#009a00",
        backgroundColor: "#009a00",
    
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
        borderColor: '#191919',
        borderWidth: 2,
        borderRadius: 4,
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: '#ffffff'
      }
})