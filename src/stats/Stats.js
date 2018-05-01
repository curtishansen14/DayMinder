import React from 'react'
import * as firebase from 'firebase'
import { View, Button, Text, StyleSheet, TextInput, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import {TextField} from 'react-native-material-textfield'
import {StackNavigator,} from 'react-navigation'

export default class Stats extends React.Component{
    render(){
        console.log('Stats')
        return(
            <View style={styles.headerView}>
                <View>
                <Text>Graph of week</Text>
                </View>
                <View>
                </View>
                <Text>Graph of month</Text>
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
        backgroundColor: '#009a00',
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
        backgroundColor: '#009a00',
    
      },
      calandarView: {
        height: 400,
        borderRadius: 3,
        borderWidth: 3,
        borderColor: '#009a00',
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
})
