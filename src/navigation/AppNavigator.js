// AppNavigator.js

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import SplashScreen from "../screens/SplashScreens";
import MainScreen from "../screens/MainScreens";
import SignupScreen from "../screens/SignupScreens";
import LoginScreen from "../screens/LoginScreens";
import HomeScreen from "../screens/HomeScreens";
import TSK from "../screens/TaskDetails/TSK-01";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TSK" component={TSK} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
