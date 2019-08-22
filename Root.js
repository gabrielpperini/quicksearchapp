
import { createStackNavigator , createAppContainer } from "react-navigation";
import Home from "./src/screens/Home";
import Empresas from "./src/screens/Empresas";
import EmpresaDetails from "./src/screens/EmpresaDetails";
import Web from "./src/screens/Web";


const AppNavigator = createStackNavigator({
  Home: Home,
  Empresas: Empresas,
  EmpresaDetails: EmpresaDetails,
  Web: Web
} , { initialRouteName: 'Home' });

export default Root = createAppContainer(AppNavigator);