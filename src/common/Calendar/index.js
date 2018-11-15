import React from 'react';
import PropTypes from 'prop-types';
import { LocaleConfig } from 'react-native-calendars';
import { Icon } from 'native-base';
import _ from 'lodash';
import { beToAd, adToBe } from '../utils';
import Day from './Day';
import theme from './theme';
import _Calendar from './_Calendar';

LocaleConfig.locales['th'] = {
  monthNames: ['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน','กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม'],
  monthNamesShort: ['ม.ค.','ก.พ.','มี.ค.','เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'],
  dayNames: ['จันทร์','อังคาร','พุธ','พฤหัสบดี','ศุกร์','เสาร์','อาทิตย์'],
  dayNamesShort: ['จ.','อ.','พ.','พฤ.','ศ.','ส.','อา.']
};

class Calendar extends React.PureComponent {
  static propTypes = {
      ..._Calendar.propTypes,
      // If useBEYear is true, monthFormat cannot be used
      useBEYear: PropTypes.bool,
      // Callback which gets executed when display month in calendar title. It should return a string
      getFormattedMonth: PropTypes.func,
  }

  static defaultProps = {
      dayComponent: Day,
      theme: theme,
      onDayPress() {},
      onDayLongPress() {},
      onMonthChange() {},
      onMonthChange() {},
      getFormattedMonth(month, monthFormat, useBEYear) {
        if (useBEYear) {
          return month.toString('MMMM ') + (parseInt(month.toString('yyyy')) + 543);
        } else {
          return month.toString(monthFormat);
        }
      },
      renderArrow(direction) {
        return (
          <Icon
            name={`chevron-${direction}`}
            type='Entypo'
            style={{color: 'grey'}}
          />
        );
      }
  }

  constructor(props) {
    super(props);
    if (this.props.useBEYear) {
      LocaleConfig.defaultLocale = 'th';
    }
  }

  convertToADIfNeeded(str) {
    const momentDate = beToAd(str);

    if (this.props.useBEYear && momentDate) {
      return momentDate.format('YYYY-MM-DD');
    }
    return str;
  }

  /**
   *
   * @param {*} str - YYYY-MM-DD
   */
  convertToBEIfNeeded(str) {
    if (this.props.useBEYear && str) {
      return adToBe(str, 'YYYY-MM-DD');
    }
    return str;
  }

  convertMarkedDatesToADIfNeeded(markedDates) {
    if (this.props.useBEYear) {
      return _.mapKeys(markedDates, (value, key) => {
        return this.convertToADIfNeeded(key);
      });
    }
    return markedDates;
  }

  convertEvent(event) {
    return {
      ...event,
      year: this.props.useBEYear ? event.year + 543 : event.year,
      dateString: this.convertToBEIfNeeded(event.dateString),
    };
  }

  handleOnDayPress = (event) => {
    this.props.onDayPress(this.convertEvent(event));
  }

  handleOnDayLongPress = (event) => {
    this.props.onDayLongPress(this.convertEvent(event));
  }

  handleOnMonthChange = (event) => {
    this.props.onMonthChange(this.convertEvent(event));
  }

  handleOnVisibleMonthsChange = (event) => {
    this.props.onMonthChange([this.convertEvent(event[0])]);
  }

  render() {
    return (
      <_Calendar
        {...this.props}
        markedDates={this.convertMarkedDatesToADIfNeeded(this.props.markedDates)}
        current={this.convertToADIfNeeded(this.props.current)}
        minDate={this.convertToADIfNeeded(this.props.minDate)}
        maxDate={this.convertToADIfNeeded(this.props.maxDate)}
        onDayPress={this.handleOnDayPress}
        onDayLongPress={this.handleOnDayLongPress}
        onMonthChange={this.handleOnMonthChange}
        onVisibleMonthsChange={this.handleOnVisibleMonthsChange}
      />
    );
  }
}

export default Calendar;