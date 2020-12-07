import React, { useState } from "react";
import { Button } from "react-native";
import { View, Text, StyleSheet } from "react-native";

const ColorScreen = () => {
  const [color, setColor]= useState([])
  return (
   <View>
      <Button 
      title="Add a color" 
      onPress={()=>{
          setColor([...color, randomRgb()]);
      }}
      />
       <View style={{ height: 100, backgroundColor: randomRgb() }}/>
  
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
};

export default ColorScreen;
