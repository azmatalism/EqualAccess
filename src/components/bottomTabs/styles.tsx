import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/constant';

export const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 60,
    width: '100%',
  },
  tabItem: {
    height: 60,
    alignItems: 'center',
    paddingHorizontal: 8,
    justifyContent: 'center',
  },
  tabActiveText: {
    color: COLORS.blue,
    fontSize: 12,
  },
  tabInActiveText: {
    fontSize: 12,
  },
});
