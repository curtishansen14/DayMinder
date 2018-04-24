import React from 'react'
import * as firebase from 'firebase'
import { View, Button, Text, StyleSheet, TextInput, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import {TextField} from 'react-native-material-textfield'
import {StackNavigator,} from 'react-navigation'


export default class Login extends React.Component {
    state={
        email:'',
        password:''
    };

    onLoginPress(){
        const {email, password} = this.state;
        console.log('Login press function start')
        firebase.auth().signInWithEmailAndPassword(email ,password)
        .then(() => {
            console.log('Logged')
            this.props.navigation.navigate('Home')
            console.log("in");
           
        });
    }

    onSignUpPress(){
        const {email, password} = this.state;
        console.log('Sign up pressed function start')
        firebase.auth().createUserWithEmailAndPassword(email, password).then(()=>{
            console.log('signed up')
        });

    }
    render() {
        let {email} = this.state;
        let {password} = this.state;
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>  
            <View style = {styles.container}>
            <KeyboardAvoidingView behavior='position'>
         
            <View>
                <View>
                    <Text style = {styles.titleText} >  DayMinder</Text> 
                    <Image
                    style = {{width: 200, height: 200, marginTop: 20}} 
                    source = {require('../images/sun.png')}/>
                    <TextField label ='Email' 
                    value={email}
                    keyboardType='email-address' 
                    onChangeText={ (email) => this.setState({email})} />
                    <TextField label ='Password'
                    value={password}
                    onChangeText= { (password) => this.setState({password})} />
                    <Button title="Login"  onPress ={this.onLoginPress.bind(this)} />
                    <Button title="Sign Up" onPress ={this.onSignUpPress.bind(this)}/>
                </View>
            </View>         
      
            </KeyboardAvoidingView>
            </View>
            </TouchableWithoutFeedback>
        );
    }
}
const styles = StyleSheet.create({
    titleText:{
        fontFamily: 'Georgia',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ffffff',
        backgroundColor: '#009a00'},
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          }   
})

