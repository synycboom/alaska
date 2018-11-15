import React from "react";
import { StatusBar } from 'react-native';
import { createDrawerNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import SchedulingScreen from './screens/scheduling';
import ShiftListScreen from './screens/shift-list/ShiftListScreen';
import ShiftDetailsScreen from './screens/shift-details/ShiftDetailsScreen';
import RequestChangeShiftScreen from './screens/request-change-shift/RequestChangeShiftScreen';
import SignInScreen from './screens/sign-in/SignInScreen';
import UserProfileScreen from './screens/user-profile/UserProfileScreen';
import { getDrawerView } from './drawer/DrawerView';
import theme from './theme';

// set status bar color for android
StatusBar.setBackgroundColor(theme.statusBarColor);

const SchedulingStack = createStackNavigator({
  Scheduling: SchedulingScreen,
  ShiftList: ShiftListScreen,
  ShiftDetails: ShiftDetailsScreen,
  RequestChangeShift: RequestChangeShiftScreen,
}, {
  initialRouteName: 'Scheduling',
});

const UserProfileStack = createStackNavigator({
  UserProfile: UserProfileScreen
})

const AppDrawer = createDrawerNavigator({
  Scheduling: {
    screen: SchedulingStack,
  },
  UserProfile: {
    screen: UserProfileStack,
  },
  Logout: {
    screen: () => {},
  },
}, {
  // set icons mapper to drawer items
  // ex. ScreenName: { name: <icon_name>, type: <icon_type> }
  contentComponent: getDrawerView({
    Scheduling: {
      name: 'developer-board',
      type: 'MaterialIcons',
    },
    UserProfile: {
      name: 'user',
      type: 'Feather',
    },
    Logout: {
      name: 'log-out',
      type: 'Entypo',
    },
  }),
});

const AuthStack = createStackNavigator({
  SignIn: SignInScreen,
}, {
  headerMode: 'none',
});

export default createSwitchNavigator({
  Auth: AuthStack,
  App: AppDrawer,
}, {
  initialRouteName: 'App',
});