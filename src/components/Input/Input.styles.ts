import {colors} from '@themes/colors';
import {fonts} from '@themes/fonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 54,
    borderRadius: 19,
    borderColor: colors.BORDER_INPUT,
    borderWidth: 1,
    paddingHorizontal: 16,
  },
  containerInput: {
    fontFamily: fonts.MEDIUM,
    flex: 1,
    height: 54,
    color: colors.NEUTRAL,
  },
  middle: {
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
  },
});
