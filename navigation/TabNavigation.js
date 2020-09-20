import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Tabs/Home";
import Notifications from "../screens/Tabs/Notifications";
import Profile from "../screens/Tabs/Profile";
import Search from "../screens/Tabs/Search";
import stackFactory from "./StackFactory";

const Tab = createBottomTabNavigator();

const headerStyle = {
  height: 80,
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={
        {
          // activeTintColor: "#e91e63",
          // showLabel: false,
        }
      }
    >
      <Tab.Screen
        name="Home"
        component={stackFactory}
        initialParams={{
          initialRoute: Home,
          customConfig: {
            title: "Home",
            headerRight: () => (
              <TouchableOpacity>
                <Text>Hello</Text>
              </TouchableOpacity>
            ),
            headerStyle,
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={stackFactory}
        initialParams={{
          initialRoute: Search,
          customConfig: {
            title: "Search",
            headerStyle,
          },
        }}
      />
      <Tab.Screen
        name="Add"
        component={View}
        listeners={({ navigation, route }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("Photo");
          },
        })}
      />
      <Tab.Screen
        name="Notifications"
        component={stackFactory}
        initialParams={{
          initialRoute: Notifications,
          customConfig: {
            title: "Notifications",
            headerStyle,
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={stackFactory}
        initialParams={{
          initialRoute: Profile,
          customConfig: {
            title: "Profile",
            headerStyle,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
