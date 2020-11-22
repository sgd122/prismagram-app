import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { stackStyles } from "./config";

const stackFactory = createStackNavigator();
const headerStyle = {
  height: 80,
  ...stackStyles
};

export default ({ route }) => {
  const { initialRoute, customConfig } = route.params;
  return (
    <stackFactory.Navigator
      screenOptions={{
        headerStyle
      }}
    >
      <stackFactory.Screen
        name={route.name}
        component={initialRoute}
        options={
          customConfig,
          initialRoute.navigationOptions
        }
      />
    </stackFactory.Navigator>
  );
};
