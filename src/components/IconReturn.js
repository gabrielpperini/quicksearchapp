import React from 'react'
import Icon from "react-native-vector-icons/AntDesign";

const IconReturn = ({fun}) => {
    

    return(
        
            <Icon 
            name={'arrowleft'}
            color={"white"}
            size={30}
            style={{
                position: 'absolute',
                top: 10,
                left: 10,
            }}
            onPress={fun}
            />
            
    )
}
export default IconReturn