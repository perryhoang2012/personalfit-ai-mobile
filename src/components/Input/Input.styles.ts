import {fonts} from '@themes/fonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 54,
    borderRadius: 19,
    borderWidth: 1,
    paddingHorizontal: 16,
  },
  containerInput: {
    fontFamily: fonts.MEDIUM,
    flex: 1,
    height: 54,
  },
  middle: {
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
  },
});
