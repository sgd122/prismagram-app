import * as React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Tabs/Home";
import Notifications from "../screens/Tabs/Notifications";
import Profile from "../screens/Tabs/Profile";
import Search from "../screens/Tabs/Search";
import StackFactory from "./StackFactory";
import MessagesLink from "../components/MessagesLink";

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
        component={StackFactory}
        initialParams={{
          initialRoute: Home,
          customConfig: {
            title: "Home",
            headerRight: () => <MessagesLink />,
            headerStyle,
          },
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
        component={StackFactory}
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
        component={StackFactory}
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
