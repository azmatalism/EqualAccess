import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../constants/constant';

const {width} = Dimensions.get('window');
export const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spLogo: {
    width: width - 85,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});
