import React, {Component} from 'react'
import { View,  Image , TouchableWithoutFeedback } from 'react-native'
import  assets  from "../../assets"
import  styles  from "../styles"
import Icon from 'react-native-vector-icons/FontAwesome'

class Header extends Component{ 
    render(){  
        return(
            <View style={styles.header}>
                <Image source={assets.logo} style={{marginLeft: 10}} />   
                <TouchableWithoutFeedback onPress={() => {
                    this.props.setMenu(true)
                }}
                >
                    <Icon
                    name={'navicon'}
                    size={30}
                    color={'black'}
                    style={{
                        paddingVertical: 30,
                        paddingHorizontal: 40
                    }}
                    />
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

export default Header 