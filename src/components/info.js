import React from 'react'
import { Text, View } from 'react-native'
import  styles  from "../styles"
import Icon from "react-native-vector-icons/FontAwesome";

const Info = ({text , iconName , iconColor}) => {
    return(
        <View style={styles.infoView}>
            <Icon
            name={iconName}
            size={15}
            color={iconColor}
            style={{marginRight: 5}}
            />
            <Text style={styles.infoText}>{text}</Text>
        </View>
    )
}
export default Info