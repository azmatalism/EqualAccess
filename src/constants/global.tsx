import {useTheme} from '@react-navigation/native';
import {useAppContext} from '../theme/AppContext';
import {COLORS} from './constant';

export const globalFont = () => {
  const {fontSize} = useAppContext();
  const {colors} = useTheme();
  return {
    fontSize,
    color: colors.text,
    fontWeight: '500' as '500',
  };
};
export const globalFontNormal = () => {
  const {fontSize} = useAppContext();
  const {colors} = useTheme();
  return {
    fontSize,
    color: colors.text,
  };
};
export const globalContainer = {
  flex: 1,
  padding: 10,
};

export const globalStyles = {
  paddingHorizontal: 24,
  paddingVertical: 24,
  fontFamily300: 'LeagueSpartan-Light',
  fontFamily400: 'LeagueSpartan-Regular',
  fontFamily500: 'LeagueSpartan-Medium',
  fontFamily100: 'LeagueSpartan-Thin',
  fontFamily600: 'LeagueSpartan-SemiBold',
  fontFamily700: 'LeagueSpartan-Bold',
  fontFamily800: 'LeagueSpartan-ExtraBold',
  fontFamily200: 'LeagueSpartan-ExtraLight',
};

export const shadow = {
  shadowColor: COLORS.black,
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.2,
  shadowRadius: 1.41,
  elevation: 2,
  backgroundColor: COLORS.white,
};
