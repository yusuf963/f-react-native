import React from "react";
import { Text, StyleSheet } from "react-native";


const HomeScreen = () => {
  return<Text style={styles.text}>First timebro</Text>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "red"
  }
});

export default HomeScreen;
