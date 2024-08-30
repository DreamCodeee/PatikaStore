import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    
    inner_container: {
        flex:1,
        margin:10,
        backgroundColor: '#eceff1',
        borderRadius:9,
    },
    image:{
        resizeMode:"cover",
        height: Dimensions.get('window').height / 4,
        width: Dimensions.get('window').width/2.5,
        borderRadius:6,
        margin:10,
    },

    title:{
        width: Dimensions.get('window').width/2.5,
        paddingLeft:14,
        fontWeight:"900",
    },
    price:{
        width: Dimensions.get('window').width/2.5,
        paddingLeft:14,
        paddingBottom:10,

    },
    stock:{
        color:"red",
        paddingLeft:14,
        paddingBottom:10,
        fontWeight:"bold"
    },
    
})