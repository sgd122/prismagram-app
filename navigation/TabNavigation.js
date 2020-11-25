import "react-native-gesture-handler";
import React from "react";
import { View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import { Platform } from "react-native";
import stackFactory from "./StackFactory";
import Home from "../screens/Tabs/Home";
import Search from "../screens/Tabs/Search";
import Notifications from "../screens/Tabs/Notifications";
import Profile from "../screens/Tabs/Profile";
import MessageLink from "../components/MessagesLink";
import NavIcon from "../components/NavIcon";
import styles from "../styles";
import Detail from "../screens/Detail";
import UserDetail from "../screens/UserDetail";

const TabNavigation = createBottomTabNavigator();
const SearchStack = createStackNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator
      initialRouteName="Search"
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: styles.blackColor,
        headerTitle: "",
      }}
    >
      <SearchStack.Screen name="Search" component={Search} />
      <SearchStack.Screen name="Detail" component={Detail} />
      <SearchStack.Screen name="UserDetail" component={UserDetail} options={{}} />
    </SearchStack.Navigator>
  );
};

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: styles.blackColor,
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerRight: () => <MessageLink />,
          headerTitle: (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <Image style={{ height: 30 }} resizeMode="contain" source={require("../assets/logo.png")} />
            </View>
          ),
        }}
      />
      <HomeStack.Screen name="UserDetail" component={UserDetail} options={({ route }) => ({ title: route.params.username })} />
    </HomeStack.Navigator>
  );
};

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator
      initialRouteName="Search"
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: styles.blackColor,
        headerTitle: "Profile",
      }}
    >
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="Detail" component={Detail} />
      <ProfileStack.Screen name="UserDetail" component={UserDetail} />
    </ProfileStack.Navigator>
  );
};

export default () => {
  return (
    <TabNavigation.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <TabNavigation.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ focused }) => <NavIcon focused={focused} name={Platform.OS === "ios" ? "ios-home" : "md-home"} />,
        }}
      />
      <TabNavigation.Screen
        name="Search"
        component={SearchStackScreen}
        options={{
          tabBarIcon: ({ focused }) => <NavIcon focused={focused} name={Platform.OS === "ios" ? "ios-search" : "md-search"} />,
        }}
      />
      <TabNavigation.Screen
        name="Add"
        component={View}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("PhotoNavigation");
          },
        })}
        options={{
          tabBarIcon: ({ focused }) => <NavIcon focused={focused} size={28} name={Platform.OS === "ios" ? "ios-add" : "md-add"} />,
        }}
      />
      <TabNavigation.Screen
        name="Notifications"
        component={stackFactory}
        initialParams={{
          initialRoute: Notifications,
          customConfig: {
            title: "Notifications",
            headerStyle: {
              height: 80,
            },
          },
        }}
        options={{
          tabBarIcon: ({ focused }) => (
            <NavIcon
              focused={focused}
              name={Platform.OS === "ios" ? (focused ? "ios-heart" : "ios-heart-empty") : focused ? "md-heart" : "md-heart-empty"}
            />
          ),
        }}
      />
      <TabNavigation.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarIcon: ({ focused }) => <NavIcon focused={focused} name={Platform.OS === "ios" ? "ios-person" : "md-person"} />,
        }}
      />
    </TabNavigation.Navigator>
  );
};