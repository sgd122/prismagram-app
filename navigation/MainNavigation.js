import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigation from "./TabNavigation";
import PhotoNavigation from "./PhotoNavigation";

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <>
      {/* <Stack.Navigator>
        <TabNavigation />
      </Stack.Navigator> */}
      <TabNavigation />
      {/* <PhotoNavigation /> */}
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
