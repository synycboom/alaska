export const LIGHT_TEAL = '#22ecfd';
export const TEAL = '#00bcd4';
export const DARK_TEAL = '#0096aa';
export const LIGHT_GREEN = '#50e3c2';
export const RED = 'red';
export const WHITE = 'white';
export const LIME = '#8bc34a';
export const WHITE_SMOKE = '#f8feff';
export const GREY = 'grey';
export const LIGHT_GREY = '#ddd';
export const DARK_GREY = '#9d9d9d';
export const BLACK = 'black';
export const ORANGE = 'orange';
export const YELLOW = '#ffe756';
export const BLUE = '#0089ce';
export const SILVER = '#edf2f5';

export const FONT_XX_SMALL = 10;
export const FONT_X_SMALL = 11;
export const FONT_SMALLER = 12;
export const FONT_SMALL = 13;
export const FONT_MEDIUM = 14;
export const FONT_LARGE = 16;
export const FONT_LARGER = 18;
export const FONT_X_LARGE = 20;
export const FONT_XX_LARGE = 22;

export const BORDER_STYLE = {
  borderWidth: 1,
  borderColor: LIGHT_GREY,
}

export const BORDER_STYLE_WITH_SHADOW = {
  ...BORDER_STYLE,
  // FOR IOS
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.8,
  shadowRadius: 2,
  // FOR ANDROID
  elevation: 1,
}

export default {
  statusBarColor: DARK_TEAL,
  header: {
    titleColor: WHITE,
    backgroundColor: TEAL,
    backIconColor: WHITE,
  },
  tabBar: {
    backgroundColor: TEAL,
    indicatorBackgroundColor: RED,
    activeTintColor: WHITE,
    inactiveTintColor: WHITE_SMOKE,
  }
};