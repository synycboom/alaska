import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { weekDayNames } from 'react-native-calendars/src/dateutils';
import { CHANGE_MONTH_LEFT_ARROW, CHANGE_MONTH_RIGHT_ARROW } from 'react-native-calendars/src/testIDs';
import CalendarHeader from 'react-native-calendars/src/calendar/header';

const previousImagePath = 'react-native-calendars/src/calendar/img/previous.png';
const nextImagePath = 'react-native-calendars/src/calendar/img/next.png';

class _CalendarHeader extends CalendarHeader {
  render() {
    let leftArrow = <View />;
    let rightArrow = <View />;
    let weekDaysNames = weekDayNames(this.props.firstDay);
    let indicator;

    if (!this.props.hideArrows) {
      leftArrow = (
        <TouchableOpacity
          onPress={this.onPressLeft}
          style={this.style.arrow}
          hitSlop={{left: 20, right: 20, top: 20, bottom: 20}}
          testID={CHANGE_MONTH_LEFT_ARROW}
        >
          { this.props.renderArrow ?
            this.props.renderArrow('left') :
            <Image
              source={require(previousImagePath)}
              style={this.style.arrowImage}
            />
          }
        </TouchableOpacity>
      );
      rightArrow = (
        <TouchableOpacity
          onPress={this.onPressRight}
          style={this.style.arrow}
          hitSlop={{left: 20, right: 20, top: 20, bottom: 20}}
          testID={CHANGE_MONTH_RIGHT_ARROW}
        >
          { this.props.renderArrow ?
            this.props.renderArrow('right') :
            <Image
              source={require(nextImagePath)}
              style={this.style.arrowImage}
            />
          }
        </TouchableOpacity>
      );
    }
    if (this.props.showIndicator) {
      indicator = <ActivityIndicator />;
    }
    return (
      <View>
        <View style={this.style.header}>
          {leftArrow}
          <View style={{ flexDirection: 'row' }}>
            <Text allowFontScaling={false} style={this.style.monthText} accessibilityTraits='header'>
              {this.props.getFormattedMonth(this.props.month, this.props.monthFormat, this.props.useBEYear)}
            </Text>
            {indicator}
          </View>
          {rightArrow}
        </View>
        { !this.props.hideDayNames && (
          <View style={this.style.week}>
            {this.props.weekNumbers && <Text allowFontScaling={false} style={this.style.dayHeader}></Text>}
            {weekDaysNames.map((day, idx) => (
              <Text allowFontScaling={false} key={idx} accessible={false} style={this.style.dayHeader} numberOfLines={1} importantForAccessibility='no'>{day}</Text>
            ))}
          </View>
        )}
      </View>
    );
  }
}

export default _CalendarHeader;