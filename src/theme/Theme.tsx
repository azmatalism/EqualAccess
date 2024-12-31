import {
  DefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {COLORS} from '../constants/constant';

const BaseTheme = {
  colors: {
    background: '',
    cardBG: '',
    text: '',
  },
};

const LightTheme = {
  ...DefaultTheme,
  //   ...BaseTheme,
  colors: {
    ...DefaultTheme.colors,
    // ...BaseTheme.colors,
    background: COLORS.lightBG,
    card: COLORS.lightCard,
    text: COLORS.black,
  },
};

const DarkTheme = {
  ...NavigationDarkTheme,
  //   ...BaseTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    // ...BaseTheme.colors,
    background: COLORS.darkBG,
    card: COLORS.darkCard,
    text: COLORS.white,
  },
};

export {LightTheme, DarkTheme};
