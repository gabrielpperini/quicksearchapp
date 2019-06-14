import React, {Component} from 'react'
import {  Text, View, Animated } from 'react-native'
import  styles  from "../styles"
import Icon from "react-native-vector-icons/FontAwesome";


class InfoDetails extends Component{

    constructor(props){
        super(props);
    }
    
    render(){
        
        return(
            <Animated.View style={[styles.whiteBox,{
                alignItems: 'flex-start'
            }]}>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 5,
                    marginBottom: 10
                }}>
                    <Icon
                    name={this.props.icon}
                    color={'red'}
                    size={20}
                    style={{marginRight: 5}}
                    />
                    <Text style={styles.titleInfoDetails}>{this.props.name}</Text>
                </View>
                <View style={{
                    flex: 1,
                    marginLeft: 20
                }}>
                    {this.props.children}
                </View>
            </Animated.View>
        );
    }

}
export default InfoDetails