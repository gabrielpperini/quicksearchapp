
import { createStackNavigator , createAppContainer } from "react-navigation";
import Home from "./src/screens/Home";
import Empresas from "./src/screens/Empresas";
import EmpresaDetails from "./src/screens/EmpresaDetails";


const AppNavigator = createStackNavigator({
  Home: Home,
  Empresas: Empresas,
  EmpresaDetails: EmpresaDetails
} , { initialRouteName: 'Home' });

export default Root = createAppContainer(AppNavigator);