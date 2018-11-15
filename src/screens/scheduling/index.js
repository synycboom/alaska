import React from "react";
import { createMaterialTopTabNavigator } from "react-navigation";
import { View, StyleSheet } from 'react-native';
import {
  Icon,
  Button
} from "native-base";
import MyScheduleView from "./my-schedule/MyScheduleView";
import SummaryView from "./summary/SummaryView";
import SwapView from "./swap/SwapView";
import theme from 'HRM/src/theme';

const style = StyleSheet.create({
  headerLeftContainer: {
    flex: 1,
  },
  headerLeftIcon: {
    color: theme.header.backIconColor,
  },
});

const Tabs = createMaterialTopTabNavigator(
  {
    MySchedule: MyScheduleView,
    Swap: SwapView,
    Summary: SummaryView
  },
  {
    tabBarOptions: {
      activeTintColor: theme.tabBar.activeTintColor,
      inactiveTintColor: theme.tabBar.inactiveTintColor,
      style: {
        backgroundColor: theme.tabBar.backgroundColor,
      },
      indicatorStyle: {
        backgroundColor: theme.tabBar.indicatorBackgroundColor
      }
    },
  }
);
  
Tabs.navigationOptions = (navigator) => {
  const menu = (
    <View style={style.headerLeftContainer}>
      <Button 
        transparent
        onPress={__ => navigator.navigation.openDrawer()}
      >
        <Icon 
          name='menu'
          style={style.headerLeftIcon}
        />
      </Button>
    </View>
  );
      
  return {
    title: 'Nurse Scheduling',
    headerLeft: menu,
    headerTitleStyle: {
      color: theme.header.titleColor
    },
    headerStyle: {
      backgroundColor: theme.header.backgroundColor,
      elevation: 0,
      shadowColor: null,
      shadowOffset: null,
      shadowOpacity: null,
      shadowRadius: null,
    }
  };
}
    
export default Tabs;