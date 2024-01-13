import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Pages //
import Homepage from "./screens/Homepage";
import Datils from "./screens/Datils";
import AppIntro from "./screens/login/AppIntro";
import Signup from "./screens/login/Signup";
import Register from "./screens/login/Register";

//

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Login Pages */}

        <Stack.Screen name="AppIntro" component={AppIntro} />
        <Stack.Screen name="SignUp" component={Signup} />
        <Stack.Screen name="Register" component={Register} />
        {/* // */}
        <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen name="Details" component={Datils} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
  },
});
