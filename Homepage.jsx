import { View, Text, Button } from "react-native";
import React from "react";

const Homepage = ({ navigation }) => {
  return (
    <View>
      <Text>This is the homepage homepage And it works</Text>
      <Button
        title="Detail screen"
        onPress={() => navigation.navigate("Details")}
      ></Button>
    </View>
  );
};

export default Homepage;
