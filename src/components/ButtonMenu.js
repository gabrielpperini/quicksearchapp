import React, {Component} from 'react'
import { TouchableOpacity , Text } from 'react-native'
import { withNavigation } from 'react-navigation';

class ButtonMenu extends Component {
    render(){
        return(
            <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('Web',{
                        link: 'https://www.quicksearch.com.br/' + this.props.link,
                        title: this.props.title
                    })
            }}
            style={{
                padding: 20,
                marginTop: this.props.bg ? 20 : 5,
                backgroundColor: this.props.bg ? 'black' : 'transparent',
                borderRadius: 10
            }}
            >
                <Text style={{
                    color: this.props.bg ? 'white' : 'black',
                    fontSize: 20,
                    textAlign: 'center',
                    textAlignVertical: 'center'
                }}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

export default withNavigation(ButtonMenu)