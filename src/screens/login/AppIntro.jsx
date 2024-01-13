import { View, Text, Button } from "react-native";
import React from "react";

const AppIntro = ({ navigation }) => {
  return (
    <View>
      <Text>AppIntro, Welcome and go ahead and sign in</Text>
      <Button title="Login" onPress={() => navigation.navigate("Home")} />
      <Button title="Sign Up" onPress={() => navigation.navigate("SignUp")} />
      <Button
        title="Register"
        onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
};

export default AppIntro;
