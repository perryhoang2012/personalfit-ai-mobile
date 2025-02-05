import {HEIGHT, WIDTH} from '@helpers/uiHelper';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlay: {
    width: WIDTH,
    height: HEIGHT,
    position: 'absolute',
    zIndex: 1,
    left: 0,
    top: 0,

    alignItems: 'center',
  },
  modalView: {
    zIndex: 2,
    width: '100%',
    overflow: 'hidden',
    paddingHorizontal: 20,
  },
  buttonBottom: {},
});
