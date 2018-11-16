import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import FeaturedScreen from 'Alaska/src/screens/main-tab/featured/FeaturedScreen';
import SearchScreen from 'Alaska/src/screens/main-tab/search/SearchScreen';
import MyCoursesScreen from 'Alaska/src/screens/main-tab/my-courses/MyCoursesScreen';
import AccountScreen from 'Alaska/src/screens/main-tab/account/AccountScreen';

const MainTabScreen = createBottomTabNavigator({
  Featured: FeaturedScreen,
  Search: SearchScreen,
  MyCourses: MyCoursesScreen,
  Account: AccountScreen,
});

export default MainTabScreen;