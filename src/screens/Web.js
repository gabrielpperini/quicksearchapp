import React, {Component} from 'react'
import {WebView , ActivityIndicator,View,Text,Dimensions} from 'react-native'
import { HeaderBackButton } from 'react-navigation';

const dim = Dimensions.get("window");

class Web extends Component{
    
    constructor(props){
        super(props);
    }

    ActivityIndicatorLoadingView() {
        //making a view to show to while loading the webpage
        return (
          <ActivityIndicator
            color='#EC1D25'
            size={70}
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
                <View style={{
                    backgroundColor: 'white',
                    flexDirection: 'row'
                }}>
                    <HeaderBackButton onPress={() => {this.props.navigation.navigate('Main')}}/>
                    <Text style={{
                        textAlignVertical: 'center',
                        marginLeft: 10,
                        fontSize:  20,
                        color: 'Black'
                    }}>{this.props.navigation.getParam('title')}</Text>
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