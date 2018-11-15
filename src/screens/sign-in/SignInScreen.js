import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { View, Text, Icon, Form, Input, Item, Label, Button } from 'native-base';
import { TEAL, WHITE, BORDER_STYLE_WITH_SHADOW, FONT_XX_LARGE, FONT_MEDIUM } from '../../theme';

const style = StyleSheet.create({
  viewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: TEAL,
    flex: 1,
  },
  viewSignInContainer: {
    borderRadius: 10,
    width: '90%',
    backgroundColor: WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    ...BORDER_STYLE_WITH_SHADOW,
  },
  viewIconContainer: {
    top: -40,
    width: 100,
    height: 100,
    backgroundColor: '#93f0fa',
    borderRadius: 100,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    ...BORDER_STYLE_WITH_SHADOW,
  },
  icon: {
    fontSize: 55,
    color: WHITE,
  },
  form: {
    padding: 20,
    width: '100%',
    alignItems: 'center',
  },
  textSignInHeader: {
    color: TEAL,
    fontSize: FONT_XX_LARGE,
    marginTop: 55,
    marginBottom: 20,
  },
  item: {
    marginBottom: 10,
    paddingLeft: 10,
  },
  label: {
    fontSize: FONT_MEDIUM
  },
  textSignInButton: {
    fontSize: FONT_MEDIUM,
    fontWeight: 'bold',
  },
  buttonSignIn: {
    backgroundColor: TEAL,
    marginTop: 20,
  },
  textForgotPassword: {
    color: TEAL,
    fontSize: FONT_MEDIUM,
    marginTop: 30,
  }
});

class SignInScreen extends React.PureComponent {
  handleSignIn = () => {
    this.props.navigation.navigate('App');
  };

  render() {
    return (
      <View style={style.viewContainer}>
        <View style={style.viewSignInContainer}>
          <View style={style.viewIconContainer}>
            <Icon
              name='user'
              type='Feather'
              style={style.icon}
            />
          </View>
          <Form style={style.form}>
            <Text style={style.textSignInHeader}>Login</Text>
            <Item regular style={style.item}>
              <Label style={style.label}>Username</Label>
              <Input />
            </Item>
            <Item regular style={style.item}>
              <Label style={style.label}>Password</Label>
              <Input secureTextEntry/>
            </Item>
            <Button 
              block 
              style={style.buttonSignIn}
              onPress={this.handleSignIn}
            >
              <Text style={style.textSignInButton}>Sign in</Text>
            </Button>
            <TouchableOpacity>
              <Text style={style.textForgotPassword}>forgot password?</Text>
            </TouchableOpacity>
          </Form>
        </View>
      </View>
    );
  }
}

export default SignInScreen;