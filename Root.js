
import React from 'react';
import { createStackNavigator , createAppContainer , createDrawerNavigator } from "react-navigation";
import Home from "./src/screens/Home";
import Empresas from "./src/screens/Empresas";
import EmpresaDetails from "./src/screens/EmpresaDetails";
import Web from "./src/screens/Web";
import Menu from "./src/components/Menu";
import Header from './src/components/Header';


const AppNavigator = createStackNavigator({
  Home: Home,
  Empresas: Empresas,
  EmpresaDetails: EmpresaDetails,
} , { 
  initialRouteName: 'Home',
  defaultNavigationOptions: ({navigation}) => ({
    header: <Header navigation={navigation}/>
  })
});


AppWithMenu = createDrawerNavigator({
  Main: AppNavigator,
  Web: {
    screen: Web,
    navigationOptions: {
      drawerLockMode: 'locked-closed'
    }
  }
},{
  initialRouteName: 'Main',
  contentComponent: Menu,
  drawerPosition: "right"
})

export default Root = createAppContainer(AppWithMenu);