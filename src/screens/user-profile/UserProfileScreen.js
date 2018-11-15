import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Button, Icon } from 'native-base';
import theme from '../../theme';

const style = StyleSheet.create({
  headerLeftContainer: {
    flex: 1,
  },
  headerLeftIcon: {
    color: theme.header.backIconColor,
  },
});

class UserProfileScreen extends React.PureComponent {
  static navigationOptions = (navigator) => {
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
      title: 'User Profile',
      headerLeft: menu,
      headerTitleStyle: {
        color: theme.header.titleColor
      },
      headerStyle: {
        backgroundColor: theme.header.backgroundColor,
      }
    };
  }

  render() {
    return (
      <Button></Button>
    );
  }
}

export default UserProfileScreen;