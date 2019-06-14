import React from 'react'
import {  Text, View, Dimensions} from 'react-native'
import  styles  from "../styles"
import Icon from "react-native-vector-icons/FontAwesome";

const dim = Dimensions.get("window");


const Funcionamento = ({
    abre,
    fecha,
    dia,
    status
}) => {
    let { id , name } = dia;
    var now = new Date;
    let color = '';
    let iconOpacity = {opacity: 1};
    if(now.getDay() === id){
        if(status){
            color = "green"
        }else{
            color = '#d30000'
        }
    }else{
        iconOpacity = {opacity: 0 , color: 'transparent'}
    }

    let horario = abre ? abre +' - '+ fecha : "Fechado";

    return(
        <View style={{
            flexDirection: 'row',
            width: dim.width - 40,
        }}>
            <Icon 
            name={'circle'}
            color={color}
            size={15}
            style={[iconOpacity, {marginBottom: 10}]}
            />
            <Text style={[styles.textFuncionamento,{
                marginLeft: 10, 
                textAlign: 'left',
            }]}>{name}</Text>
            <Text style={[styles.textFuncionamento,{
                marginLeft: 5,
                textAlign: 'right',
            }]}>{horario}</Text>
        </View>
    )
}
export default Funcionamento