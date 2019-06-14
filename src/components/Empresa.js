import React, {Component} from 'react'
import {  Text, Animated, Image , TouchableOpacity } from 'react-native'
import  styles  from "../styles"
import Info from "./info"


class Empresa extends Component{

    constructor(props){
        super(props);
        this.scaleValue = new Animated.Value(0);
    }

    
    componentDidMount(){
        Animated.timing(this.scaleValue, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true
        }).start();
    }

    state = {
        display: 'none'
    }
    
    
    
    render(){
        let EmpresaScale = this.scaleValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0.3, 0.65, 1]
        });
    
        let transformStyle = { transform: [{ scale: EmpresaScale }] };
        let a = null;
        if(this.props.aberto){
            a = {
                text: 'Aberto Agora',
                color: 'green'
            };
        }else{
            a = {
                text: 'Fechado',
                color: '#d30000'
            };
        };
        return(
            <Animated.View style={[styles.empresaCard ,transformStyle ]}>
                <Text style={styles.empresaName}>{this.props.name}</Text>
                {this.props.image ?
                    <Image source={this.props.image} style={{borderRadius: 10, width: 150, height: 150, display: this.state.display }} 
                        onLoadEnd={() => this.setState({display: 'flex'})}
                    />
                :
                    <Image source={this.props.image} style={{display: 'none'}} /> 
                }
                <Info text={this.props.endereco} iconName={"map-marker"} iconColor={"#969696"} />
                <Info text={a.text} iconName={"circle"} iconColor={a.color} />
                <Info text={this.props.email} iconName={"envelope"} iconColor={"#969696"} />
                <Info text={this.props.telefone} iconName={"phone"} iconColor={"#969696"} />
                <TouchableOpacity style={styles.empresaMore} onPress={this.props.onPress}>
                    <Text style={styles.empresaMoreText}>Ver Mais</Text>
                </TouchableOpacity>
            </Animated.View>
        );
    }

}
export default Empresa