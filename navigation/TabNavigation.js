import * as React from "react";
import { View, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Tabs/Home";
import Notifications from "../screens/Tabs/Notifications";
import Profile from "../screens/Tabs/Profile";
import Search from "../screens/Tabs/Search";
import StackFactory from "./StackFactory";
import MessagesLink from "../components/MessagesLink";
import NavIcon from "../components/NavIcon";

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
          showLabel: false,
        }
      }
    >
      <Tab.Screen
        name="Home"
        component={StackFactory}
        initialParams={{
          initialRoute: Home,
          customConfig: {
            title: (
              <NavIcon
                name="logo-instagram"
                size={36}
              />
            ),
            headerRight: () => <MessagesLink />,
            headerStyle,
          },
        }}
        options={{
          tabBarIcon: ({ color, size }) => (
            <NavIcon
              name={Platform.OS === "ios" ? "ios-home" : "md-home"}
            />
          )
        }}
      />
      <Tab.Screen
        name="Search"
        component={StackFactory}
        initialParams={{
          initialRoute: Search,
          customConfig: {
            title: "Search",
            headerStyle,
          },
        }}
        options={{
          tabBarIcon: ({ color, size }) => (
            <NavIcon
              name={Platform.OS === "ios" ? "ios-search" : "md-search"}
            />
          )
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
        options={{
          tabBarIcon: ({ color, size }) => (
            <NavIcon
              name={Platform.OS === "ios" ? "ios-add" : "md-add"}
            />
          )
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={StackFactory}
        initialParams={{
          initialRoute: Notifications,
          customConfig: {
            title: "Notifications",
            headerStyle,
          },
        }}
        options={{
          tabBarIcon: ({ color, size }) => (
            <NavIcon
              name={Platform.OS === "ios" ? "ios-heart" : "md-heart"}
            />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={StackFactory}
        initialParams={{
          initialRoute: Profile,
          customConfig: {
            title: "Profile",
            headerStyle,
          },
        }}
        options={{
          tabBarIcon: ({ color, size }) => (
            <NavIcon
              name={Platform.OS === "ios" ? "ios-person" : "md-person"}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
