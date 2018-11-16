import React from "react";
import { StatusBar } from 'react-native';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import MainTabScreen from './screens/main-tab/MainTabScreen';
import theme from './theme';

// StatusBar.setBackgroundColor(theme.statusBarColor);

const AppStack = createStackNavigator({
  MainTab: MainTabScreen,
}, {
  initialRouteName: 'MainTab',
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