import {StyleSheet} from 'react-native';
import {globalStyles} from '../../constants/global';
import {COLORS} from '../../constants/constant';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    // backgroundColor: COLORS.white,
  },
  titleText: {
    fontSize: 18,
    fontWeight: '500',
    // color: COLORS.black,
    marginLeft: 10,
  },
});
