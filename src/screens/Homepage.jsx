import { View, Text, Button, useWindowDimensions } from "react-native";
import React from "react";
import { TabView, SceneMap } from "react-native-tab-view";

const FirstRoute = () => {
  <View>
    {" "}
    <Text> This is the first view </Text>{" "}
  </View>;
};
const SecondRoute = () => {
  <View>
    {" "}
    <Text> This is the first view </Text>{" "}
  </View>;
};

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const Homepage = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
};

export default Homepage;
