import {getStatusBarHeight} from '@helpers/uiHelper';
import {colors} from '@themes/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingTop: getStatusBarHeight + 40,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.GRAY_700,
    paddingVertical: 20,
  },

  buttonSubmit: {
    backgroundColor: colors.NEUTRAL,
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 40,
  },
});
