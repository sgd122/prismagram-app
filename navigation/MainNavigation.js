import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigation from "./TabNavigation";
import PhotoNavigation from "./PhotoNavigation";
import MessageNavigation from "./MessageNavigation";

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({ route, navigation }) => ({
          headerShown: false,
        })}
        mode="modal"
      >
        <Stack.Screen name="Home" component={TabNavigation} />
        <Stack.Screen name="Photo" component={PhotoNavigation} />
        <Stack.Screen name="Message" component={MessageNavigation} />
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
