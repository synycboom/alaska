import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'native-base';
import { 
  WHITE, 
  TEAL, 
  ORANGE, 
  FONT_MEDIUM, 
  FONT_SMALL, 
  BORDER_STYLE 
} from 'HRM/src/theme';

const style = StyleSheet.create({
  viewContainer: {
    backgroundColor: WHITE,
    padding: 10,
    ...BORDER_STYLE,
  },
  viewTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  viewBottom: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 15,
  },
  textTopLeft: {
    fontWeight: 'bold',
    fontSize: FONT_MEDIUM,
    color: TEAL,
  },
  textTopRight: {
    fontSize: FONT_MEDIUM,
  },
  textBottomLeft: {
    fontSize: FONT_SMALL,
  },
  textBottomRight: {
    fontSize: FONT_SMALL,
    color: ORANGE,
  },
});

class SummaryListItem extends React.PureComponent {
  render() {
    const {
      textTopLeft,
      textTopRight,
      textBottomLeft,
      textBottomRight,
    } = this.props;

    return (
      <View style={style.viewContainer}>
        <View style={style.viewTop}>
          <Text style={style.textTopLeft}>{textTopLeft}</Text>
          <Text style={style.textTopRight}>{textTopRight}</Text>
        </View>
        <View style={style.viewBottom}>
          <Text style={style.textBottomLeft}>{textBottomLeft}</Text>
          <Text style={style.textBottomRight}>{textBottomRight}</Text>
        </View>
      </View>
    );
  }
}

export default SummaryListItem;