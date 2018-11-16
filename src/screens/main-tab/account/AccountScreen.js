import React from 'react';
import { Icon, Container, Content, Header, Body, Title } from 'native-base';
import theme from 'Alaska/src/theme';

class AccountScreen extends React.PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      tabBarIcon: ({tintColor}) => (
        <Icon 
          name='user' 
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
    return (
      <Container>
        <Header>
          <Body>
            <Title>Account</Title>
          </Body>
        </Header>
        <Content>

        </Content>
      </Container>
    );
  }
}

export default AccountScreen;