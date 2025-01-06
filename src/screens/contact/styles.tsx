import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  youtubeContainer: {
    height: 300,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
