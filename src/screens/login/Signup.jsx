import { View, Text, Button } from "react-native";
import React from "react";

const Signup = ({ navigation }) => {
  return (
    <View>
      <Text>Signup</Text>
      <Button title="Log In" onPress={() => navigation.navigate("AppIntro")} />
    </View>
  );
};

export default Signup;
