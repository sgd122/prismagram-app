import "react-native-gesture-handler";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import SelectPhoto from "../screens/Photo/SelectPhoto";
import TakePhoto from "../screens/Photo/TakePhoto";
import UploadPhoto from "../screens/Photo/UploadPhoto";
import styles from "../styles";
import { stackStyles } from "./config";

const PhotoTabs = createMaterialTopTabNavigator();
const PhotoNavigation = createStackNavigator();

const headerStyle = {
  // headerBackTitle: null,
  // headerTintColor: styles.blackColor,
  ...stackStyles,
};

const PhotoTab = () => {
  return (
    <PhotoTabs.Navigator
      tabBarPosition="bottom"
      tabBarOptions={{
        indicatorStyle: { backgroundColor: styles.blackColor, marginBottom: 65 },
        labelStyle: { color: styles.blackColor, fontWeight: "600" },
        style: { paddingBottom: 20, ...stackStyles },
      }}
    >
      <PhotoTabs.Screen name="SelectPhoto" component={SelectPhoto} options={{ tabBarLabel: "Select" }} />
      <PhotoTabs.Screen name="TakePhoto" component={TakePhoto} options={{ tabBarLabel: "Take" }} />
    </PhotoTabs.Navigator>
  );
};

export default () => {
  return (
    <PhotoNavigation.Navigator screenOptions={{ headerStyle }}>
      <PhotoNavigation.Screen name="PhotoTab" component={PhotoTab} options={{ headerTitle: "사진 선택" }} />
      <PhotoNavigation.Screen name="UploadPhoto" component={UploadPhoto} />
    </PhotoNavigation.Navigator>
  );
};