/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import {View} from 'react-native'
import Root from "./Root"
import Header from "./src/components/Header"
import ApiClass from './Api'


export default class App extends Component {
  
  Api = new ApiClass();
  async componentDidMount(){
    await this.Api.getData();  
  }
  
  render() {
    console.disableYellowBox = true;
    return (
      <View style={{flex: 1}}>
        <Header style={{flex: 1}} />
        <Root style={{flex: 1}} />
      </View>
    )
  }
}