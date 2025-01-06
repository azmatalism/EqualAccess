import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/constant';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackground: {
    width: '90%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  modalView: {
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    width: '90%',
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
    width: '50%',
    marginTop: 10,
    alignSelf: 'center',
  },
  optionText: {
    textAlign: 'center',
    fontSize: 16,
    color: COLORS.textColor,
  },
});
