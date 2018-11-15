import React from 'react';
import { View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import dateutils from 'react-native-calendars/src/dateutils';
import {parseDate} from 'react-native-calendars/src/interface';
import _CalendarHeader from './_CalendarHeader';

/**
* This component inherits from the original Calendar from react-native-calendars.
*  We need to replace CalendarHeader in order to be able to display BE year
*/
class _CustomCalendar extends Calendar {
  render() {
    const {
      displayLoadingIndicator,
      markedDates,
      style,
      theme,
      hideArrows,
      firstDay,
      renderArrow,
      monthFormat,
      hideDayNames,
      showWeekNumbers,
      onPressArrowLeft,
      onPressArrowRight,
      useBEYear,
      getFormattedMonth,
    } = this.props;

    const {
      currentMonth,
    } = this.state;

    let indicator;
    const current = parseDate(this.props.current);
    const days = dateutils.page(currentMonth, firstDay);
    const weeks = [];

    while (days.length) {
      weeks.push(this.renderWeek(days.splice(0, 7), weeks.length));
    }
    if (current) {
      const lastMonthOfDay = current.clone().addMonths(1, true).setDate(1).addDays(-1).toString('yyyy-MM-dd');
      if (displayLoadingIndicator && !(markedDates && markedDates[lastMonthOfDay])) {
        indicator = true;
      }
    }

    return (
      <View style={[this.style.container, style]}>
        <_CalendarHeader
          useBEYear={useBEYear}
          theme={theme}
          hideArrows={hideArrows}
          month={currentMonth}
          addMonth={this.addMonth}
          showIndicator={indicator}
          firstDay={firstDay}
          renderArrow={renderArrow}
          monthFormat={monthFormat}
          hideDayNames={hideDayNames}
          weekNumbers={showWeekNumbers}
          onPressArrowLeft={onPressArrowLeft}
          onPressArrowRight={onPressArrowRight}
          getFormattedMonth={getFormattedMonth}
        />
        <View style={this.style.monthView}>{weeks}</View>
      </View>
    );
  }
}

export default _CustomCalendar;