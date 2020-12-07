import React, {useState} from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Button title="Increase" onPress={()=> setCount(count +1)} ></Button>

      <Button title="Decrease" onPress={()=> setCount(count -1)} ></Button>
      <Text>Current state is:{count}</Text>
    </View>
  );
};

export default CounterScreen;
