import {StyleSheet} from 'react-native';
import {globalStyles} from '../../constants/global';
import {COLORS} from '../../constants';

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
    // fontWeight: '500',
    color: COLORS.white,
  },
});
