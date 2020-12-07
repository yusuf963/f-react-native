import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";

// props destructring, pulling only the object navigation from the intire big object when console.log it ...  basically its replacing props

const HomeScreen = ({ navigation }) => {
  const myName = "Author: Hassan";
  return (
    <View>
      <Text style={styles2.text}>De Footbal</Text>
      <Text style={styles2.subText}>{myName}</Text>

      <Text>_______________________________________________________</Text>

      <TouchableOpacity
        style={styles2.subText}
        onPress={() => navigation.navigate("List")}
      >
        <Text>See Coming Matches</Text>
      </TouchableOpacity>

      <View
        style={{
          borderBottomColor: "green",
          borderBottomWidth: 5,
        }}
      />

      <Button
        onPress={() => navigation.navigate("Component")}
        title="Go To Predicting Section"
      ></Button>

      <Button
        onPress={() => navigation.navigate("Image")}
        title="Go to Image"
      ></Button>

      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Go to Counter"
      ></Button>

      {/* ColorScreen compoenent */}
      <Button
        onPress={() => navigation.navigate("Color")}
        title="Go to Color Screen"
      ></Button>
    </View>
  );
};

const styles2 = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
  },
  subText: {
    fontSize: 14,
    color: "red",
    textAlign: "center",
    marginBottom: 30,
  },
});

export default HomeScreen;
