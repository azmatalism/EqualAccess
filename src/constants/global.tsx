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

export const normalStyle = () => {
  const {fontSize} = useAppContext();
  const {colors} = useTheme();
  return {
    fontSize,
    color: colors.text,
  };
};

export const headingStyle = () => {
  const {fontSize} = useAppContext();
  const {colors} = useTheme();
  return {
    fontSize: fontSize + 4,
    color: colors.text,
    fontWeight: '700' as '700',
  };
};

export const globalContainer = {
  flex: 1,
  padding: 10,
};

export const shadow = {
  shadowColor: COLORS.black,
  shadowOffset: {
    width: 2,
    height: 2,
  },
  shadowOpacity: 0.2,
  shadowRadius: 5,
  elevation: 3,
  backgroundColor: COLORS.white,
};
