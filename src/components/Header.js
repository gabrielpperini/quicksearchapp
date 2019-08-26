import React, {Component} from 'react'
import { View,  Image , TouchableOpacity } from 'react-native'
import  assets  from "../../assets"
import  styles  from "../styles"
import Icon from 'react-native-vector-icons/FontAwesome'

class Header extends Component{ 
    render(){  
        return(
            <View style={styles.header}>
                <Image source={assets.logo} style={{marginLeft: 10}} />   
                <TouchableOpacity onPress={() => {
                    this.props.navigation.openDrawer();
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
                </TouchableOpacity>
            </View>
        )
    }
}

export default Header 