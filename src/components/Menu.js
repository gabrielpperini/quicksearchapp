import React, {Component} from 'react'
import { View, TouchableOpacity , Dimensions , Animated , Easing , Linking , Text } from 'react-native'
import  assets  from "../../assets"
import  styles  from "../styles"
import Icon from 'react-native-vector-icons/FontAwesome'
import ButtonMenu from './ButtonMenu';


const dim = Dimensions.get("window");


class Menu extends Component{ 
    constructor(props){
        super(props);
    }

    render(){  
        return(
            <View style={styles.menuAnimated}>
                <TouchableOpacity onPress={()=>{this.props.navigation.closeDrawer()}}>
                    <Icon
                    name={'remove'}
                    size={30}
                    color={'black'}
                    style={{
                        paddingVertical: 20,
                        paddingHorizontal: 20
                    }}
                    />
                </TouchableOpacity>

                <View style={{
                    alignItems: 'center',
                    position: 'absolute',
                    width: dim.width * 0.75,
                    top: 100,
                }}>
                    <ButtonMenu link={'sobre'} title={'Sobre Nós'} />
                    <ButtonMenu link={'assinatura'} title={'Assinatura'} />
                    <ButtonMenu link={'quickcard'} title={'Quick Card'} />
                    <ButtonMenu link={'admin'} title={'Login'} />
                    <ButtonMenu link={'assets/app/politica_privacidade.pdf'} title={'Política de Privacidade'} />
                    <ButtonMenu link={'anuncie'} title={'Contato'} bg={true} />
                </View>
            </View>
        )
    }
}

export default Menu