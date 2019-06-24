import React, {Component} from 'react'
import { TouchableOpacity , Linking , Text } from 'react-native'

const ButtonMenu = ({
    link,
    title,
    bg
}) => {
    return(
        <TouchableOpacity onPress={() => {
            Linking.openURL('http://quicksearch.com.br/' + link);
        }}
        style={{
            padding: 20,
            marginTop: bg ? 20 : 5,
            backgroundColor: bg ? 'black' : 'transparent',
            borderRadius: 10
        }}
        >
            <Text style={{
                color: bg ? 'white' : 'black',
                fontSize: 20,
                textAlign: 'center',
                textAlignVertical: 'center'
            }}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonMenu