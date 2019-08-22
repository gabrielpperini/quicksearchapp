import React, {Component} from 'react'
import { TouchableOpacity , Linking , Text , Platform } from 'react-native'
import { withNavigation } from 'react-navigation';

const ButtonMenu = ({
    link,
    title,
    bg,
    navigation
}) => {
    return(
        <TouchableOpacity onPress={() => {
            if(Platform.OS === 'ios'){
                navigation.navigate('Web',{link: 'http://quicksearch.com.br/' + link})
            }else{
                Linking.openURL('http://quicksearch.com.br/' + link);
            }
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

export default withNavigation(ButtonMenu)