import React from 'react';
import { Icon } from 'native-base';
import theme from 'Alaska/src/theme';

class MyCoursesScreen extends React.PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      tabBarIcon: ({tintColor}) => (
        <Icon 
          name='play-circle' 
          type='Feather' 
          style={{
            fontSize: theme.tabBar.iconFontSize,
            color: tintColor,
          }}
        />
      )
    };
  }

  render() {
    return (null);
  }
}

export default MyCoursesScreen;