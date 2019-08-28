import { StyleSheet , Dimensions } from 'react-native';
import { isIphoneX } from './isIphoneX'
const dim = Dimensions.get("window");

const topBorder = isIphoneX() ? 36 : 18

export default styles = StyleSheet.create({
    header:{
        height: 122,
        backgroundColor: "white",
        borderTopColor: '#EC1D25',
        borderTopWidth: topBorder,
        shadowOffset: {  
            width: 0,
            height: 5,  
        },
        shadowColor: 'black',
        shadowOpacity: .5,
        elevation: 5,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        zIndex:900,
    },
    bgHome: {
        flex: 1 , 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    searchInputView: {
        width: dim.width - 40 , 
        height: 50 , 
        backgroundColor: '#C4C4C4',
        opacity: 0.8,
        borderColor: "#D9D9D9",
        borderWidth: 2,
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center' 
    },
    searchInput: {
        marginLeft: 25 , 
        marginRight: 40 ,
        fontSize: 20,
        fontWeight: '100',
        color:"#7A7A7A",
        width: dim.width - 120 ,
    },
    searchText: {
        width: dim.width - 40 ,
        color: "white",
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20
    },
    scrollEmpresas: {
        backgroundColor: '#f0efee',
        flex:1
    },
    empresasSearch: {
        backgroundColor: '#002F55',
        height:150,
        justifyContent: 'center',
        alignItems: 'center'
    },
    flatEmpresas: {
        paddingHorizontal: 15,
        backgroundColor: '#f0efee',
        flex:1,
        paddingTop: 20
    },
    empresaCard: {
        backgroundColor: 'white',
        borderRadius: 15,
        width: dim.width - 30 ,
        padding: 16,
        marginBottom: 20
    },
    empresaName: {
        fontSize: 17,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 20
    },
    empresaMore: {
        marginTop: 20,
        backgroundColor: 'red',
        borderRadius: 10,
        width: 120,
        padding: 14,
    },
    empresaMoreText: {
        color: 'white',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    infoView: {
        flexDirection: 'row',
        marginTop:20
    },
    infoText: {
        fontSize: 14,
        color: '#969696',
        lineHeight: 20,
        marginTop: -3
    },
    notFound: {
        marginTop: 30,
        marginHorizontal: 20,
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    notFoundText1: {
        textAlign: 'center',
        fontSize: 32,
        color: '#212529',
        marginBottom: 5
    },
    notFoundText2: {
        textAlign: 'center',
        fontSize: 15,
        color: '#666666',
        marginBottom: 5
    },
    viewDetails: {
        backgroundColor: '#f0efee',
        paddingBottom: 100
    },
    viewCategoria: {
        backgroundColor: '#002f55',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    textCategoria: {
        color: 'white',
        fontSize: 20,
        textTransform: 'uppercase'
    },
    whiteBox: {
        backgroundColor: 'white',
        width: dim.width - 40,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        padding: 20,
        borderRadius: 15
    },
    titleInfoDetails:{
        color: '#7f7f7f',
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    textName: {
        fontSize: 35,
        color: '#002f55',
        marginBottom: 20,
        textAlign: 'center'
    },
    textDescricao: {
        fontSize: 15,
        color: '#002f55',
        marginBottom: 20,
        textAlign: 'justify'
    },
    textFuncionamento: {
        color: '#212529',
        fontSize: 15,  
        marginTop: -3  ,
        marginBottom: 10,
    },
    infoDetailsChildren: {
        color: '#152947',
        fontSize: 15
    },
    menuAnimated:{
        width: dim.width * 0.75,
        height: dim.height,
        backgroundColor: 'white',
        marginTop: isIphoneX() ? 36 : 0,
        elevation: 8,
        zIndex: 999,
    },
    headerWeb: {
        backgroundColor: 'white',
        flexDirection: 'row',
        borderTopColor: '#000',
        borderTopWidth: topBorder
    },
    textHeaderWeb: {
        alignSelf: 'center',
        marginLeft: 10,
        fontSize:  20,
        color: 'black',

    },
});