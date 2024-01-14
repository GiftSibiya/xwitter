import { View, Text, Button, useWindowDimensions } from "react-native";
import React, { useState } from "react";
import { TabView, SceneMap } from "react-native-tab-view";

/// File imports ///
import ForYou from "./tabView/ForYou";
import Following from "./tabView/Following";

const renderScene = SceneMap({
  first: ForYou,
  second: Following,
});

const Homepage = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);

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
