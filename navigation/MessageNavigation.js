import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Message from "../screens/Messages/Message";
import Messages from "../screens/Messages/Messages";

const Stack = createStackNavigator();

const MessageNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Message"
      screenOptions={({ route, navigation }) => ({
        // headerShown: false,
        headerStyle: { backgroundColor: '#EFEEEF' },
      })}
    >
      <Stack.Screen name="Message" component={Message} />
      <Stack.Screen name="Messages" component={Messages} />
    </Stack.Navigator>
  );
};

export default MessageNavigation;
