import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HomeScreen = ()=>{
  const myName = 'Yusuf';
  return(
    <View>
      <Text style={styles2.text}>MY first React App and gitttttttting styarted with React native</Text>
      <Text style={styles2.subText}>{myName}</Text>
    </View>
  )
};

const styles2 = StyleSheet.create({
  text:{
    fontSize: 30
  },
  subText:{
    fontSize: 20,
    color: "red"
  }
});

export default HomeScreen;