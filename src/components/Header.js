import React, {Component} from 'react'
import { View,  Image } from 'react-native'
import  assets  from "../../assets"
import  styles  from "../styles"

class Header extends Component{ 
    
    render(){  
        return(
            <View style={styles.header}>
                <Image source={assets.logo} />    
            </View>
        )
    }
}

export default Header