import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  TEAL,
  BORDER_STYLE_WITH_SHADOW,
  FONT_X_SMALL,
} from 'HRM/src/theme';

const style = StyleSheet.create({
  viewContainer: {
    flex: 0.9,
    width: '50%',
    ...BORDER_STYLE_WITH_SHADOW,
  },
  viewTopSection: {
    flex: 0.7,
    backgroundColor: TEAL,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewBottomSection: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  textTop: {
    fontSize: 30,
    color: 'white',
  },
  textBottom: {
    fontSize: FONT_X_SMALL,
    color: 'grey',
  },
});

class TotalShift extends React.PureComponent {
  render() {
    const {
      totalShifts
    } = this.props;

    return (
      <View style={style.viewContainer}>
        <View style={style.viewTopSection}>
          <Text style={style.textTop}>
            {totalShifts}
          </Text>
        </View>
        <View style={style.viewBottomSection}>
          <Text style={style.textBottom}>Total Shifts</Text>
        </View>
      </View>
    );
  }
}

export default TotalShift;