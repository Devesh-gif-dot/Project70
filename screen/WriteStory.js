import React, { Component } from 'react';
import { Text, View, StyleSheet, Button,TextInput,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import {BarCodeScanner} from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';
import {Header} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// You can import from local files


// or any pure javascript modules available in npm
//import { Card } from 'react-native-paper';

export default class WriteScreen extends Component {
  constructor(){
    super();
    this.state = {
      buttonState:'normal',
      storyTitle:'',
      storyAuthor:'',
      story:''
    };
  }
    

  
  render() {
    

    return (
      <View style={{ flex: 1 }}>
        <SafeAreaProvider>
        <Header 
        backgroundColor={'pink'}
        centerComponent={{
          text:'Story Hub',
          style:{fontSize:25,color:'black'}
        }}/>
          <TextInput style={styles.input}
          onChangeText={(text)=>{this.setState({storyTitle:text})}} 
          value={this.state.storyTitle}
          placeholder="Story Title"/>

          <TextInput style={styles.input}
          onChangeText={(text)=>{this.setState({storyAuthor:text})}} 
          value={this.state.storyAuthor}
          placeholder="Author"/>

         <TextInput style={styles.input1}
          onChangeText={(text)=>{this.setState({story:text})}} 
          value={this.state.story}
          placeholder="Write Story Here"
          multiline={true}/>
        </SafeAreaProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input:{
    color:'black',
    borderColor:'black',
    borderWidth:2.5,
    height:25,
    width:200,
    alignContent:'center',
    alignSelf:"center",
    marginTop:20   
  },
  view:{
    flexDirection:'row',
    marginTop:30
  },
  input1:{
    color:'black',
    borderColor:'black',
    borderWidth:2.5,
    height:200,
    width:200,
    alignContent:'center',
    alignSelf:"center",
    marginTop:20   
  }
})
