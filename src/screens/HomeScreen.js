import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';

const HomeScreen = (props)=>{
  const myName = 'Author: Hassan';
  return(
    <View>
      <Text style={styles2.text}>De Footbal</Text>
      <Text style={styles2.subText}>{myName}</Text>

      <Text>               
    _______________________________________________________
      </Text>

      <TouchableOpacity style={styles2.subText} onPress={()=> props.navigation.navigate('List')}>

        <Text>See Coming Matches</Text>
        
       
      </TouchableOpacity>

      <View
  style={{
    borderBottomColor: 'green',
    borderBottomWidth: 5
  }}
/>

      <Button 
      onPress={()=> props.navigation.navigate('Component')} 
      title='Go To Predicting Section'>

      </Button>

    </View>
  )
};


const styles2 = StyleSheet.create({
  text:{
    fontSize: 30,
    textAlign:"center"
  },
  subText:{
    fontSize: 14,
    color: "red",
    textAlign: "center",
    marginBottom:30
  }
});

export default HomeScreen;
