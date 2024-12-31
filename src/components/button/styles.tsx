import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/constant';

export const styles = StyleSheet.create({
  button: {
    height: 40,
    borderRadius: 10,
    backgroundColor: COLORS.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 14,
    color: COLORS.white,
  },
  disabled: {
    backgroundColor: COLORS.lightBlue,
  },
});
