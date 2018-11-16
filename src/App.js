import React from "react";
import { StatusBar } from 'react-native';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
// import theme from './theme';
import MainTabScreen from './screens/main-tab/MainTabScreen';
import PurchaseCourseScreen from "./screens/purchase-course/PurchaseCourseScreen";

// StatusBar.setBackgroundColor(theme.statusBarColor);

const AppStack = createStackNavigator({
  MainTab: MainTabScreen,
  PurchaseCourse: PurchaseCourseScreen
}, {
  initialRouteName: 'PurchaseCourse',
  headerMode: 'none',
});

// const AuthStack = createStackNavigator({
//   SignIn: SignInScreen,
// }, {
//   headerMode: 'none',
// });

export default createSwitchNavigator({
  // Auth: AuthStack,
  App: AppStack,
}, {
  initialRouteName: 'App',
});