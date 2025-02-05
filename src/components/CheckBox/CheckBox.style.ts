import {scale} from '@helpers/uiHelper';
import {colors} from '@themes/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: scale(24),
    height: scale(24),
    borderRadius: 50,
  },
  active: {
    backgroundColor: colors.PRIMARY,
  },
  inActive: {
    borderColor: colors.GRAY_400,
    borderWidth: 1,
  },
});
