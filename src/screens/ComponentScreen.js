import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const ComponentScreen = ()=>{
    return(
        <View style={style.viewCompo}>
             <Text style={style.texCompo}>Another component screen here</Text>
         </View>

    )
};

const style = StyleSheet.create({
    viewCompo:{ 
        backgroundColor:"blue",
        height:200,
        display: "flex",
        justifyContent: "center",
        alignItems:"center",
        borderRadius: 10,
        margin: 10
    },
    
    
    texCompo:{
        color: 'white',
        textAlign:'center'
    }
})

export default ComponentScreen;