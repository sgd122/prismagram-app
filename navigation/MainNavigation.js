import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigation from "./TabNavigation";
import PhotoNavigation from "./PhotoNavigation";

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Tab"
        screenOptions={({ route, navigation }) => ({
          // headerShown: false,
        })}
        mode="modal"
      >
        <Stack.Screen name="Tab" component={TabNavigation} />
        <Stack.Screen name="Photo" component={PhotoNavigation} />
      </Stack.Navigator>
    </>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};
