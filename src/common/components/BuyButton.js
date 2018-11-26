import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';
import { FONT_MEDIUM, FONT_LARGE } from '../../theme';

const styles = StyleSheet.create({
  button: {
    height: '80%', 
    justifyContent: 'center', 
    alignSelf: 'center',
  },
  text: {
    fontSize: FONT_LARGE,
  }
});

export default class BuyButton extends React.PureComponent {
  render() {
    const { style } = this.props;

    return (
      <Button danger style={[styles.button, style]}>
        <Text style={styles.text}>BUY</Text>
      </Button>
    );
  }
};