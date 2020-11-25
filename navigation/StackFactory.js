import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { stackStyles } from "./config";
import styles from "../styles";

const stackFactory = createStackNavigator();

const headerStyle = {
  height: 80,
  headerBackTitle: null,
  headerTintColor: styles.blackColor,
  ...stackStyles
};

export default ({ route }) => {
  const { initialRoute, customConfig } = route.params;
  return (
    <stackFactory.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle
      }}
    >
      <stackFactory.Screen
        name={route.name}
        component={initialRoute}
        options={customConfig}
      />
    </stackFactory.Navigator>
  );
};
