import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetails = ({imageSource, score, title }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text style={style.text}>Here is Image of {title}</Text>
      <Text>Place score is: {score}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "red",
  },
});

export default ImageDetails;
