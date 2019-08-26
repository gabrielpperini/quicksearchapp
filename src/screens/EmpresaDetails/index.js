import React, {Component} from 'react'
import { View, ScrollView , Image , Dimensions , Text  } from 'react-native'
import  styles  from "../../styles"
import InfoDetails from '../../components/InfoDetails';
import Funcionamento from '../../components/Funcionamento';
import IconReturn from '../../components/IconReturn';
import MapView, { Marker } from 'react-native-maps';

const dim = Dimensions.get("window");

class EmpresaDetails extends Component{
    
    constructor(props){
        super(props);
    }

    state = {
        imageDisplay: {display: 'flex'},
        region: this.getInitialState()
    }
    
    static navigationOptions = {
    }
    
    // item = {
    //     categoria: "Alimentacão / Onde Comer, Restaurante",
    //     domingo_abre: "",
    //     domingo_fecha: "",
    //     email: "",
    //     foto: "https://www.quicksearch.com.br/assets/img/empresas/1302.jpg",
    //     id: "13",
    //     local: "Rua  Visconde de Pelotas 682,  Caxias do Sul RS  95010-070",
    //     name: "Restaurante Censi",
    //     quarta_abre: "07:00",
    //     quarta_fecha: "19:00",
    //     quinta_abre: "07:00",
    //     quinta_fecha: "19:00",
    //     sabado_abre: "07:00",
    //     sabado_fecha: "19:00",
    //     segunda_abre: "07:00",
    //     segunda_fecha: "19:00",
    //     sexta_abre: "07:00",
    //     sexta_fecha: "19:00",
    //     status: true,
    //     tags: "restaurante, melhor, buffet, comida, caxias do sul, censi",
    //     telefone: "(54) 3028-4894",
    //     telefone2: "(54) 3028-4894",
    //     telefone3: "(54) 3028-4894",
    //     terca_abre: "07:00",
    //     terca_fecha: "19:00",
    //     categoriaName: 'Restaurante',
    //     descricao: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum v vlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsum',
    //     coordenadas: {
    //         lat: -29.1696801,
    //         lng: -51.1632925,
    //     },
    // }

    item = this.props.navigation.state.params;
     
    onRegionChange(region) {
        this.setState({ region });
    }

    getInitialState() {
        return {
          region: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
        };
      }

    render(){
        // console.log(this.props.navigation.state.params);
        return(
            <ScrollView 
            styles={styles.scrollEmpresas}
            >
                <View style={styles.viewDetails}>
                    <View style={styles.viewCategoria}>
                        <IconReturn fun={() => this.props.navigation.goBack()} />
                        <Text style={styles.textCategoria}>{this.item.categoriaName}</Text>
                    </View>
                    <View style={[styles.whiteBox,this.state.imageDisplay]}>
                        <Image source={{uri: this.item.foto }} style={{
                            width: dim.width - 80,
                            height: dim.width - 80,
                        }} 
                        />
                    </View>
                    <View style={styles.whiteBox}>
                        <Text style={styles.textName}>{this.item.name}</Text>
                        <Text style={styles.textDescricao}>{this.item.descricao}</Text>
                    </View> 
                    <InfoDetails name={'Funcionamento'} icon={'clock-o'}>
                        <Funcionamento abre={this.item.segunda_abre} fecha={this.item.segunda_fecha} dia={{id: 1, name: 'Segunda'}} status={this.item.status}/>   
                        <Funcionamento abre={this.item.terca_abre} fecha={this.item.terca_fecha} dia={{id: 2, name: 'Terça'}} status={this.item.status}/>   
                        <Funcionamento abre={this.item.quarta_abre} fecha={this.item.quarta_fecha} dia={{id: 3, name: 'Quarta'}} status={this.item.status}/>   
                        <Funcionamento abre={this.item.quinta_abre} fecha={this.item.quinta_fecha} dia={{id: 4, name: 'Quinta'}} status={this.item.status}/>   
                        <Funcionamento abre={this.item.sexta_abre} fecha={this.item.sexta_fecha} dia={{id: 5, name: 'Sexta'}} status={this.item.status}/>   
                        <Funcionamento abre={this.item.sabado_abre} fecha={this.item.sabado_fecha} dia={{id: 6, name: 'Sabado'}} status={this.item.status}/>   
                        <Funcionamento abre={this.item.domingo_abre} fecha={this.item.domingo_fecha} dia={{id: 0, name: 'Domingo'}} status={this.item.status}/>   
                    </InfoDetails>
                    <InfoDetails name={'Telefones'} icon={'phone'}>
                        {this.item.telefone ? <Text style={styles.infoDetailsChildren}>{this.item.telefone}</Text>: null}
                        {this.item.telefone2 ? <Text style={styles.infoDetailsChildren} >{this.item.telefone2}</Text>: null}
                        {this.item.telefone3 ? <Text style={styles.infoDetailsChildren} >{this.item.telefone3}</Text>: null}    
                    </InfoDetails>
                    <InfoDetails name={'Email'} icon={'envelope'} >
                        <Text style={styles.infoDetailsChildren}>{this.item.email ? this.item.email : "Email Não Cadastrado"}</Text>
                    </InfoDetails>
                    <InfoDetails name={'Endereço'} icon={'map-marker'} >
                        <Text style={styles.infoDetailsChildren}>{this.item.local}</Text>
                        <MapView
                        style={{
                            height: 200,
                            marginTop: 10
                        }}
                        region={{
                            latitude:  this.item.coordenadas.lat,
                            longitude: this.item.coordenadas.lng,
                            latitudeDelta: (200 * 0.01 )/( dim.width - 100 ),
                            longitudeDelta: 0.01,
                          }}
                        >
                            <Marker
                                coordinate={{
                                    latitude:  this.item.coordenadas.lat,
                                    longitude: this.item.coordenadas.lng,
                                }}
                            />
                        </MapView>
                    </InfoDetails>
                </View>
            </ScrollView>
        )
    }
}

export default EmpresaDetails