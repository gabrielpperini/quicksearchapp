import React, {Component} from 'react'
import { View,  TouchableWithoutFeedback , TouchableOpacity , Dimensions , Animated , Easing , Linking , Text } from 'react-native'
import  assets  from "../../assets"
import  styles  from "../styles"
import Icon from 'react-native-vector-icons/FontAwesome'
import ButtonMenu from './ButtonMenu';


const dim = Dimensions.get("window");


class Menu extends Component{ 
    constructor(props){
        super(props);
        this.xTranslate = new Animated.Value(0);
    }

    componentDidUpdate() {
        if (this.props.visible) {
            // animate the showing of the modal
            this.xTranslate.setValue(0); // reset the animated value
            Animated.spring(this.xTranslate, {
            toValue: 1,
            friction: 8,
            }).start();
        } else {
            // animate the hiding of the modal
            Animated.timing(this.xTranslate, {
            toValue: 0,
            duration: 200,
            easing: Easing.linear
            }).start();
        }
    }

    render(){  
        let right = dim.width * -0.75;
        let menuMoveX = this.xTranslate.interpolate({
            inputRange: [0, 1],
            outputRange: [ 0 , right]
        });

        let translateStyle = { transform: [{ translateX: menuMoveX }] };
        return(
            <Animated.View style={[{
                width: dim.width * 0.75,
                height: dim.height - 8,
                backgroundColor: 'white',
                position: 'absolute',
                right: dim.width * -0.8,
                top: 8,
                elevation: 8
            }, translateStyle]}>
            <TouchableWithoutFeedback onPress={this.props.onClose}>
                <Icon
                name={'remove'}
                size={30}
                color={'black'}
                style={{
                    paddingVertical: 20,
                    paddingHorizontal: 20
                }}
                />
            </TouchableWithoutFeedback>

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
            </Animated.View>
        )
    }
}

export default Menu