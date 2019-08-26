import React, {Component} from 'react'
import {  AsyncStorage, View, ScrollView , FlatList } from 'react-native'
import  styles  from "../../styles"
import Search from '../../components/Search';
import Empresa from '../../components/Empresa';
import NotFound from '../../components/NotFound';
import IconReturn from '../../components/IconReturn';

class Empresas extends Component{
    
    constructor(props){
        super(props);
    }
    
    static navigationOptions = {
    }

    state ={
        search: '',
        data: '',
        results: [],
        totalResults: ''
    }
    setChildState = (val) => {
        this.setState({search: val})
    }

    setResults(element){
        let s = new RegExp(this.state.search ? this.state.search : this.props.navigation.state.params);
        if(element.name.match(s) || element.categoria.match(s) || element.tags.match(s) ){
            return element;
        }
    }

    setStatus(abre , fecha){
        let now = new Date;
        var hour = now.getHours() + ':' + now.getMinutes + ":" + now.getSeconds();
        if(hour > abre + ":00" && hour < fecha + ":00" ){
            return true;
        }else{
            return false;
        }
    }

    async componentDidMount(){
        // fetch('https://www.quicksearch.com.br/pages/appData')
        // .then((response) => response.json())
        // .then((responseJson) => {
        //     console.log(responseJson)
        //     var busca = this.busca(responseJson);
        //     console.log(busca);
        //     this.setState({
        //         results:busca.results,
        //         data:responseJson,
        //         totalResults: busca.totalResults
        //     });
        // });
            // responseJson = data;
            // console.log(responseJson)
            const data = await AsyncStorage.getItem('dataEmpresas');
            var busca = this.busca(JSON.parse(data));
            // console.log(busca);
            this.setState({
                results:busca.results,
                data:JSON.parse(data),
                totalResults: busca.totalResults
            });
    }


    busca(data){
        const arr = [];
            for (let i = 0; i < data.length; i++) {
                if(this.setResults(data[i])){
                    var now = new Date;
                    switch (now.getDay()) {
                        case 0:
                            data[i].status = this.setStatus( data[i].domingo_abre , data[i].domingo_fecha);
                        break;
                        case 1:
                            data[i].status = this.setStatus( data[i].segunda_abre , data[i].segunda_fecha);
                        break;
                        case 2:
                            data[i].status = this.setStatus( data[i].terca_abre , data[i].terca_fecha);
                        break;
                        case 3:
                            data[i].status = this.setStatus( data[i].quarta_abre , data[i].quarta_fecha);
                        break;
                        case 4:
                            data[i].status = this.setStatus( data[i].quinta_abre , data[i].quinta_fecha);
                        break;
                        case 5:
                            data[i].status = this.setStatus( data[i].sexta_abre , data[i].sexta_fecha);
                        break;
                        case 6:
                            data[i].status = this.setStatus( data[i].sabado_abre , data[i].sabado_fecha);
                        break;
                    }

                    arr.push(this.setResults(data[i]));
                    // console.log(this.setResults(data[i]));
                }
            }
            
            return {
                results:arr,
                totalResults: arr.length
            };

    }
    
    
   
    render(){
        // console.log(this.state.results);
        return(
            <ScrollView 
            styles={styles.scrollEmpresas}
            >
                <View style={styles.empresasSearch}>
                    <IconReturn fun={() => this.props.navigation.goBack()} color={'white'}/>
                    <Search 
                    style={{opacity: 1}} 
                    val={this.props.navigation.state.params} 
                    placeholder={'Buscar'} 
                    setState={this.setChildState.bind(this)}
                    search={() => { this.setState(this.busca(this.state.data)) } }
                    /> 
                </View>
                {(this.state.totalResults === 0) ? 
                    <NotFound funHome={() => this.props.navigation.navigate('Home')} />
                    :
                    <FlatList
                    data={this.state.results}
                    style={styles.flatEmpresas}
                    renderItem={({ item }) => (
                        <Empresa 
                        name={item.name} 
                        image={{uri: item.foto}} 
                        endereco={item.local} 
                        aberto={item.status}
                        email={item.email}
                        telefone={item.telefone}
                        onPress={()=>{ this.props.navigation.navigate( 'EmpresaDetails' , item);}}
                        
                        />
                    )}
                    keyExtractor={item => item.id}
                    extraData={this.state.results}
                    />
                }
            </ScrollView>
        )
    }
}

export default Empresas