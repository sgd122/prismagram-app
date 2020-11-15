import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import SelectPhoto from "../screens/Photo/SelectPhoto";
import TakePhoto from "../screens/Photo/TakePhoto";
import UploadPhoto from "../screens/Photo/UploadPhoto";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const PhotoNavigation = () => {
  return (
    <Tab.Navigator tabBarPosition="bottom">
      <Tab.Screen name="SelectPhoto" component={SelectPhoto} />
      <Tab.Screen name="TakePhoto" component={TakePhoto} />
    </Tab.Navigator>
  );
};

export default () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Tab"
        screenOptions={({ route, navigation }) => ({
          // headerShown: false,
          headerStyle: { backgroundColor: '#EFEEEF' },
        })}
      >
        <Stack.Screen name="Photo" component={PhotoNavigation} />
        <Stack.Screen name="UploadPhoto" component={UploadPhoto} />
      </Stack.Navigator>
    </>
  );
};
