import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'native-base';
import { BLUE, LIGHT_GREY } from '../../../theme';

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: LIGHT_GREY,
    flexDirection: 'row',
    height: 2,
  },
  viewProgress: {
    backgroundColor: BLUE,
    height: 2,
  }
});

export default class ProgressBar extends React.PureComponent {
  render() {
    const { percent } = this.props;

    return (
      <View style={styles.viewContainer}>
        <View style={[styles.viewProgress, {width: `${percent}%`}]} />
      </View>
    );
  }
}