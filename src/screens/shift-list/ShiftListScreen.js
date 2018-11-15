import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Button,
  Icon,
  Content,
} from 'native-base';
import theme from 'HRM/src/theme';
import ShiftList from './ShiftList';

const style = StyleSheet.create({
  viewNavigationHeaderLeft: {
    flex: 1
  },
  iconNavigationLeft: {
    color: theme.header.backIconColor
  ,}
});

class ShiftListScreen extends React.PureComponent {
  static navigationOptions = navigator => {
    const headerLeft = (
      <View style={style.viewNavigationHeaderLeft}>
        <Button
          transparent
          onPress={__ => navigator.navigation.goBack()}
        >
          <Icon
            name='chevron-left'
            type='Entypo'
            style={style.iconNavigationLeft}
          />
        </Button>
      </View>
    );
    
    return {
      headerLeft: headerLeft,
      title: 'Shift Details',
      headerTitleStyle: {
        color: theme.header.titleColor
      },
      headerStyle: {
        backgroundColor: theme.header.backgroundColor
      }
    };
  }

  render() {
    return (
      <Content>
        <ShiftList
          items={[
            {
              shiftPeriodType: 'MORNING',
              shiftTitle: 'Morning Shift',
              dateTime: '07:00 - 15:00 10/08/2561',
              location: 'Location WARD 4A',
              shiftType: 'Regular Shift',
            },
            {
              shiftPeriodType: 'AFTERNOON',
              shiftTitle: 'Afternoon Shift',
              dateTime: '07:00 - 15:00 10/08/2561',
              location: 'Location WARD 4A',
              shiftType: 'Regular Shift',
            },
            {
              shiftPeriodType: 'NIGHT',
              shiftTitle: 'Night Shift',
              dateTime: '07:00 - 15:00 10/08/2561',
              location: 'Location WARD 4A',
              shiftType: 'Regular Shift',
            },
          ]}
        />
      </Content>
    );
  }
}

export default ShiftListScreen;