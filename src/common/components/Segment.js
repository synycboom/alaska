import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'native-base';
import { WHITE, FONT_MEDIUM } from '../../theme';

const styles = StyleSheet.create({
  viewContainer: {
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: WHITE,
    alignSelf: 'stretch',
  },
  textHeader: {
    fontSize: FONT_MEDIUM,
    fontWeight: 'bold',
    marginBottom: 10
  }
});

export default class Segment extends React.PureComponent {
  render() {
    const { children, header } = this.props;

    return (
      <View style={styles.viewContainer}>
        <Text style={styles.textHeader}>{header}</Text>
        {children}
      </View>
    );
  }
}