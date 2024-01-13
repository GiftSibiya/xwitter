import { View, Text, Button } from "react-native";
import React from "react";

const Register = ({ navigation }) => {
  return (
    <View>
      <Text>Register</Text>
      <Button title="Log In" onPress={() => navigation.navigate("AppIntro")} />
    </View>
  );
};

export default Register;
