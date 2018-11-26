import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { Icon } from 'native-base';
import Day from 'react-native-calendars/src/calendar/day/basic/';
import {
  FONT_XX_SMALL,
  FONT_X_SMALL
} from '../../theme';

const style = StyleSheet.create({
  viewSubContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  markStyle: {
    flex: 1,
    alignItems: 'flex-end',
  },
  inChargeStyle: { 
    marginTop: 2, 
    marginRight: 4, 
    fontSize: FONT_XX_SMALL, 
  },
  textVacation: {
    fontSize: FONT_X_SMALL,
  },
});

class NurseDay extends Day {
  render() {
    const containerStyle = [this.style.base];
    const textStyle = [this.style.text];
    const components = {};
    const marking = (
      this.props.marking instanceof Array || !this.props.marking ?
      { morning: {}, afternoon: {}, night: {} } :
      this.props.marking
    );
    const isDisabled = (
      typeof marking.disabled !== 'undefined' ?
      marking.disabled :
      this.props.state === 'disabled'
    );

    if (isDisabled) {
      containerStyle.push(this.style.disabledContainer);
      textStyle.push(this.style.disabledText);
    } else if (this.props.state === 'today') {
      containerStyle.push(this.style.today);
      textStyle.push(this.style.todayText);
    }
    
    if (marking.selected) {
      containerStyle.push(this.style.selected);
    }

    ['morning', 'afternoon', 'night'].forEach(mark => {
      const isAfterNoon = mark === 'afternoon';

      if (marking[mark].status === 'RESERVED') {
        const icon = marking[mark].inCharge && (
          <Icon
            name='star'
            type="FontAwesome"
            style={[style.inChargeStyle, this.style.inCharge]}
          />
        );

        components[mark] = (
          <View style={[style.markStyle, this.style[mark]]}>
            {icon}
          </View>
        );
      } else if (marking[mark].status === 'OFF') {
        components[mark] = (
          <View style={[
            style.markStyle, 
            this.style.off, 
            isAfterNoon ? { alignItems: 'center' } : {}
          ]}>
            {isAfterNoon && <Text style={style.textVacation}>Vac</Text>}
          </View>
        );
      } else if (marking[mark].status === 'LEAVE') {
        components[mark] = <View style={[style.markStyle, this.style.leave]} />;
      }
    })

    return (
      <TouchableOpacity
        style={containerStyle}
        onPress={this.onDayPress}
        onLongPress={this.onDayLongPress}
        activeOpacity={marking.activeOpacity}
        disabled={marking.disableTouchEvent}
      >
        <View style={style.viewSubContainer}>
          { components.morning }
          { components.afternoon }
          { components.night }
        </View>
        <Text allowFontScaling={false} style={textStyle}>{String(this.props.children)}</Text>
      </TouchableOpacity>
    );
  }
}
    
export default NurseDay;