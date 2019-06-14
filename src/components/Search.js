import React, {Component} from 'react'
import {  Text, View, TextInput} from 'react-native'
import  styles  from "../styles"
import Icon from "react-native-vector-icons/FontAwesome";


class Search extends Component{
    constructor(props){
        super(props);
    }

    state ={
        val: this.props.val
    }

    infos = this.props.infos ? { display: 'flex' } : { display: 'none' };
   
    render(){
        return(
                <View>
                    <View style={[styles.searchInputView, this.props.style]}>
                        <TextInput placeholder={this.props.placeholder} 
                        value={this.state.val}
                        onChangeText={(val) => {this.props.setState(val); this.setState({val: val})}}
                        style={styles.searchInput}/>
                        <Icon
                            name={'search'}
                            size={22}
                            color={'#EC1D25'}
                            onPress={this.props.search}
                            style={{
                                position: 'absolute',
                                right: 25
                            }}
                        />
                    </View>
                    <Text style={[styles.searchText, this.infos ]}>Busque empresas, restaurantes, médicos e muito mais...</Text>
                </View>
        )
    }
}

export default Search