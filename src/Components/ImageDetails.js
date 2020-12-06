import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const ImageDetails =(props)=>{
    return(
        <View>
            <Text style={style.text}>Here is Image Details of {props.title}</Text>
        </View>
    )
};

const style = StyleSheet.create({
    text:{
        fontSize: 30,
        color: 'red'
    }
});

export default ImageDetails;