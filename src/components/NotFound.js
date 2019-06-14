import React from 'react'
import {  Text, View , TouchableOpacity} from 'react-native'
import  styles  from "../styles"


const NotFound = ({
    funHome
}) => {
    
    return(
        <View style={styles.notFound}>
            <Text style={styles.notFoundText1}>Nenhum resultado encontrado.</Text>
            <Text style={styles.notFoundText2}>Pressione o botão abaixo para voltar a tela inicial.</Text>
            <TouchableOpacity style={styles.empresaMore} onPress={funHome}>
                <Text style={styles.empresaMoreText} >Início</Text>
            </TouchableOpacity>
        </View>
    )
}
export default NotFound