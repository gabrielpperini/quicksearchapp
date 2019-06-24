/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import {View,Dimensions} from 'react-native'
import Root from "./Root"
import Header from "./src/components/Header"
import ApiClass from './Api'
import OneSignal from 'react-native-onesignal'
import Menu from './src/components/Menu';

const dim = Dimensions.get("window");


export default class App extends Component {
  
  Api = new ApiClass();
  async componentDidMount(){
    await this.Api.getData();  
    OneSignal.init('719197a3-c136-4331-8cb3-7935f0fad08b');
    OneSignal.addEventListener("received", this.receivedPush);
    OneSignal.addEventListener("opened", this.openedPush);
    OneSignal.addEventListener("ids", this.idsPush);
  }
    
  receivedPush(push){
    console.log("Received Push:", push);
  }
  openedPush(push){
    console.log("Opened Push:", push);
  }
  idsPush(push){
    console.log("IDS Push:", push);
  }

  state = {
    menuVisibility: false,
  }

  setMenuVisibility = (val) => {
    this.setState({menuVisibility: val})
  }

  render() {
    console.disableYellowBox = true;
    return (
      <View style={{flex: 1}}>
        
        <Header style={{flex: 1}} 
        setMenu={this.setMenuVisibility.bind(this)} 
        />
        <Root style={{flex: 1}} />
        <Menu 
            visible={this.state.menuVisibility} 
            onClose={() => {
                this.setState({
                    menuVisibility: false
                });
            }} 
        /> 
      </View>
    )
  }
}