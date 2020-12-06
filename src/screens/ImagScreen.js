import React from 'react';
import { View, StyleSheet} from 'react-native';
import ImageDetails from '../Components/ImageDetails.js'

const ImageScreen =()=>{
    return(
        <View>
            <ImageDetails tite={'Forest'}/>
            <ImageDetails title={'Mountain'}/>
            <ImageDetails title={'Beach'}/>
            <ImageDetails title={'Space'}/>
          
        </View>
    )
};

const style= StyleSheet.create({
    text:{
        fontSize: 30,
        color: 'red'
    }
});

export default ImageScreen;