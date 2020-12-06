import React from "react";
import { View, StyleSheet } from "react-native";
import ImageDetails from "../Components/ImageDetails.js";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetails
        title="Forest"
        imageSource={require("../../assets/forest.jpg")}
        score='7/10'
      />
      <ImageDetails
        title="Mountain"
        imageSource={require("../../assets/mountain.jpg")}
        score='9/10'
      />
      <ImageDetails
        title="Beach"
        imageSource={require("../../assets/beach.jpg")}
        score='7/10'
      />
      <ImageDetails
        title="Space"
        imageSource={require("../../assets/forest.jpg")}
        score='10/10'
      />
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "red",
  },
});

export default ImageScreen;
