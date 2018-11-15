import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import { 
  FONT_SMALL,
  FONT_MEDIUM,
} from 'HRM/src/theme';

const style = StyleSheet.create({
  viewContainer: {
    flexDirection: 'row',
    marginVertical: 2,
  },
  viewLeftSide: {
    flex: 0.6,
    alignItems: 'center',
    flexDirection: 'row',
  },
  viewRightSide: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  iconLeft: {
    marginRight: 5,
    fontSize: FONT_MEDIUM,
  },
  textSummary: {
    fontWeight: '500',
    fontSize: FONT_SMALL,
  },
  textShifts: {
    fontSize: FONT_SMALL,
  },
});

class ShiftSummary extends React.PureComponent {
  render() {
    const {
      icon,
      type,
      color,
      summary,
      shifts,
    } = this.props;
    
    return (
      <View style={style.viewContainer}>
        <View style={style.viewLeftSide}>
          <Icon
            name={icon}
            type={type}
            style={[style.iconLeft, {color}]}
          />
          <Text style={style.textSummary}>
            {summary}
          </Text>
        </View>
        <View style={style.viewRightSide}>
          <Text style={style.textShifts}>
            {shifts}
          </Text>
        </View>
      </View>
    );
  }
}
  
export default ShiftSummary;