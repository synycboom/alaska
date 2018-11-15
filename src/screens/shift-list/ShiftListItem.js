import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { 
  withNavigation
} from 'react-navigation';
import {
  View,
  Icon,
  Text,
} from 'native-base';
import {
  TEAL,
  GREY,
  WHITE,
  BLACK,
  FONT_SMALL,
  FONT_X_LARGE,
  BORDER_STYLE_WITH_SHADOW,
} from 'HRM/src/theme';
import {
  MORNING_COLOR,
  AFTERNOON_COLOR,
  NIGHT_COLOR,
} from 'HRM/src/common/Calendar/theme';

const style = StyleSheet.create({
  viewContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    position: 'relative',
    backgroundColor: WHITE,
  },
  viewContainerWithBorder: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    position: 'relative',
    backgroundColor: WHITE,
    ...BORDER_STYLE_WITH_SHADOW,
  },
  viewLeftIconContainer: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconLeft: {
    fontSize: 55,
  },
  viewInfo: {
    flex: 0.8,
  },
  textShiftTitle: {
    color: BLACK,
    fontSize: FONT_X_LARGE,
  },
  textDateTime: {
    color: GREY,
    fontSize: FONT_SMALL,
  },
  viewLocation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textLocation: {
    color: GREY,
    fontSize: FONT_SMALL,
  },
  iconLocation: {
    color: GREY,
    fontSize: FONT_SMALL,
    paddingLeft: 0,
  },
  textShiftType: {
    color: GREY,
    fontSize: FONT_SMALL,
  },
  viewRightIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconRight: {
    color: TEAL,
  },
});

class ShiftListItem extends React.PureComponent {
  static propTypes = {
    shiftPeriodType: PropTypes.oneOf(['MORNING', 'AFTERNOON', 'NIGHT']).isRequired,
    shiftTitle: PropTypes.string,
    dateTime: PropTypes.string,
    location: PropTypes.string,
    shiftType: PropTypes.string,
    hideBorder: PropTypes.bool,
    hideRightIcon: PropTypes.bool,
    touchable: PropTypes.bool,
  };

  static defaultProps = {
    touchable: true
  };

  handleOnPress = () => {
    this.props.navigation.navigate('ShiftDetails')
  };

  render() {
    const {
      shiftPeriodType,
      shiftTitle,
      dateTime,
      location,
      shiftType,
      hideBorder,
      hideRightIcon,
      touchable,
    } = this.props;

    let iconName = null;
    let iconType = null;
    let iconColor = null;

    if (shiftPeriodType === 'MORNING') {
        iconName = 'sun';
        iconType = 'Feather';
        iconColor = MORNING_COLOR;
      } else if (shiftPeriodType === 'AFTERNOON') {
        iconName = 'sun';
        iconType = 'Feather';
        iconColor = AFTERNOON_COLOR;
      } else if (shiftPeriodType === 'NIGHT') {
        iconName = 'moon';
        iconType = 'Feather';
        iconColor = NIGHT_COLOR;
    }

    const item = (
      <View style={hideBorder ? style.viewContainer : style.viewContainerWithBorder}>
        <View style={style.viewLeftIconContainer}>
          <Icon
            style={[style.iconLeft, {color: iconColor}]}
            type={iconType}
            name={iconName}
          />
        </View>
        <View style={style.viewInfo}>
          <Text style={style.textShiftTitle}>{shiftTitle}</Text>
          <Text style={style.textDateTime}>{dateTime}</Text>
          <View style={style.viewLocation}>
            <Icon
              name='location-on'
              type='MaterialIcons'
              style={style.iconLocation}
            />
            <Text style={style.textLocation}>{location} | </Text>
            <Text style={style.textShiftType}>{shiftType}</Text>
          </View>
        </View>
        {!hideRightIcon && (
          <View style={style.viewRightIconContainer}>
            <Icon
              name='chevron-right'
              type='Entypo'
              style={style.iconRight}
            />
          </View>
        )}
      </View>
    );

    if (touchable) {
      return <TouchableOpacity onPress={this.handleOnPress}>{item}</TouchableOpacity>; 
    } else {
      return item
    }
  }
}

export default withNavigation(ShiftListItem);