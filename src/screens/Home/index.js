import React, {Component} from 'react'
import {ImageBackground , AsyncStorage} from 'react-native'
import  assets  from "../../../assets"
import  styles  from "../../styles"
import Search from '../../components/Search';


class Home extends Component{
    
    constructor(props){
        super(props);
    }
    
    static navigationOptions = {
    }
    state ={
        search: '',
    }
    setChildState = (val) => {
        this.setState({search: val})
    }


    render(){
        
        return(
            <ImageBackground source={assets.bg} style={styles.bgHome}>
                <Search 
                placeholder={'O que está buscando?'} 
                home={true}
                setState={this.setChildState.bind(this)}
                search={async () => {
                    let data = await AsyncStorage.getItem('errortNet');

                    if(this.state.search !== '' && data === "1" ){ 
                        this.props.navigation.navigate('Empresas', this.state.search)
                    }else if(data !== "1" && data !== null) {
                        alert(data);
                    }
                    // console.log(data);
                }
                } />
            </ImageBackground>
        )
    }
}

export default Home