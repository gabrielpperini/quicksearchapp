import React, {Component} from 'react'
import {WebView , ActivityIndicator,View,Text,Platform} from 'react-native'
import { HeaderBackButton } from 'react-navigation';
import styles from '../styles';

const ActivityIndicatorSize = (Platform.OS === 'ios') ? 'large' : 70;

class Web extends Component{
    
    constructor(props){
        super(props);
    }

    ActivityIndicatorLoadingView() {
        //making a view to show to while loading the webpage
        return (
          <ActivityIndicator
            color='#EC1D25'
            size={ActivityIndicatorSize}
            style={{
                flex: 1,
                justifyContent: 'center',
              }}
          />
        );
    }

    render(){
        console.log(this.props.navigation.getParam('link'));
        return(
            <View style={{flex: 1}}>
                <View style={[styles.headerWeb]}>
                    <HeaderBackButton onPress={() => {this.props.navigation.navigate('Main')}}/>
                    <Text style={styles.textHeaderWeb}>{this.props.navigation.getParam('title')}</Text>
                </View>
                <WebView
                useWebKit={true} 
                style={{flex:1}} 
                source={{uri: this.props.navigation.getParam('link')}}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                renderLoading={this.ActivityIndicatorLoadingView}
                startInLoadingState={true}
                />
            </View>
        )
    }
}

export default Web