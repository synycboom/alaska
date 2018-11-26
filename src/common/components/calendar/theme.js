import {
  FONT_SMALLER,
  FONT_SMALL,
  SILVER,
  DARK_GREY,
  GREY,
  LIGHT_TEAL,
  LIGHT_GREEN,
  BLUE,
  YELLOW,
  LIGHT_GREY,
} from '../../theme'

const DAY_WIDTH = 45;

export const OFF_COLOR = DARK_GREY;
export const LEAVE_COLOR = '#ba8863'
export const MORNING_COLOR = LIGHT_TEAL;
export const AFTERNOON_COLOR = LIGHT_GREEN;
export const NIGHT_COLOR = BLUE;
export const IN_CHARGE_COLOR = YELLOW;

export default {
  'stylesheet.calendar.header': {
    dayHeader: {
      marginTop: 2,
      marginBottom: 7,
      width: DAY_WIDTH,
      paddingLeft: 5,
      fontSize: FONT_SMALL,
      fontFamily: 'System',
      color: '#b6c1cd'
    },
    week: {
      marginTop: 5,
      flexDirection: 'row',
      justifyContent: 'space-around'
    }
  },
  'stylesheet.calendar.main': {
    monthView: {
      marginVertical: 10,
      backgroundColor: '#ffffff'
    },
    week: {
      marginBottom: 6,
      flexDirection: 'row',
      justifyContent: 'space-evenly'
    }
  },
  'stylesheet.day.basic': {
    text: {
      fontSize: FONT_SMALLER,
      fontFamily: 'System',
      fontWeight: '300',
      color: '#2d4150',
      backgroundColor: 'rgba(255, 255, 255, 0)',
      position: 'absolute',
      top: 2,
      left: 5
    },
    disabledText: {
      color: LIGHT_GREY,
    },
    disabledContainer: {
      backgroundColor: SILVER,
    },
    base: {
      width: DAY_WIDTH,
      height: DAY_WIDTH,
      backgroundColor: '#ffffffd6',
    },
    selected: {
      borderWidth: 2,
      borderColor: 'red',
    },
    /* MARKER COLOR */
    off: {
      backgroundColor: OFF_COLOR
    },
    leave: {
      backgroundColor: LEAVE_COLOR
    },
    morning: {
      backgroundColor: MORNING_COLOR
    },
    afternoon: {
      backgroundColor: AFTERNOON_COLOR
    },
    night: {
      backgroundColor: NIGHT_COLOR
    },
    inCharge: {
      color: IN_CHARGE_COLOR
    }
  }
}