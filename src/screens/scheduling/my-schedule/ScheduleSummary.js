import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  MORNING_COLOR,
  AFTERNOON_COLOR,
  NIGHT_COLOR,
  IN_CHARGE_COLOR,
} from 'HRM/src/common/Calendar/theme';
import TotalShift from './TotalShift';
import ShiftSummary from './ShiftSummary';

const style = StyleSheet.create({
  viewContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 20,
  },
  viewShiftSummaryContainer: {
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewTotalShiftContainer: {
    flex: 0.4,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});

class ScheduleSummary extends React.PureComponent {
  render() {
    const {
      totalShifts,
      morningSummary,
      morningShifts,
      afternoonSummary,
      afternoonShifts,
      nightSummary,
      nightShifts,
    } = this.props;
    
    return (
      <View style={style.viewContainer}>
        <View style={style.viewShiftSummaryContainer}>
          <ShiftSummary 
            icon='solid' 
            type='MaterialCommunityIcons' 
            color={MORNING_COLOR} 
            summary={morningSummary} 
            shifts={morningShifts}
          />
          <ShiftSummary 
            icon='solid' 
            type='MaterialCommunityIcons' 
            color={AFTERNOON_COLOR} 
            summary={afternoonSummary}
            shifts={afternoonShifts}
          />
          <ShiftSummary 
            icon='solid'
            type='MaterialCommunityIcons'
            color={NIGHT_COLOR} 
            summary={nightSummary}
            shifts={nightShifts}
          />
          <ShiftSummary 
            icon='star' 
            type='FontAwesome' 
            color={IN_CHARGE_COLOR} 
            summary='Incharge'
          />
        </View>
        <View style={style.viewTotalShiftContainer}>
          <TotalShift totalShifts={totalShifts}/>
        </View>
      </View>
    );
  }
}
  
export default ScheduleSummary;