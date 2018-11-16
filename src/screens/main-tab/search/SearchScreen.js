import React from 'react';
import { Icon } from 'native-base';
import theme from 'Alaska/src/theme';

class SearchScreen extends React.PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      tabBarIcon: ({tintColor}) => (
        <Icon 
          name='search' 
          type='Octicons' 
          style={{
            fontSize: theme.tabBar.iconFontSize,
            color: tintColor,
          }}
        />
      )
    };
  }

  render() {
    return (
      null
    );
  }
}

export default SearchScreen;