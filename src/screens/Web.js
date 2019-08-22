import React, {Component} from 'react'
import {WebView , AsyncStorage} from 'react-native'



class Web extends Component{
    
    constructor(props){
        super(props);
    }
    
    static navigationOptions = {
        header: null
    }


    render(){
        
        return(
            <WebView
            useWebKit={true} style={{flex:1}} source={{url: this.props.navigation.getParam('link')}}
            />
        )
    }
}

export default Web