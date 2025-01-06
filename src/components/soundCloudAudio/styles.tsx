import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 166,
    width: Dimensions.get('window').width - 25,
    marginVertical: 10,
    alignSelf: 'center',
  },
  webview: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});
