import { View, Text, Button } from "react-native";
import React from "react";

const Datils = ({ navigation }) => {
  return (
    <View>
      <Text>Datils</Text>
      <Button
        title="Go to HomePage"
        onPress={() => navigation.navigate("Home")}
      ></Button>
    </View>
  );
};

export default Datils;
