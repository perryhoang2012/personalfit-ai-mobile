import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
    justifyContent: 'center',
    flex: 1,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '49%',
    paddingVertical: 13,
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 10,
    paddingHorizontal: 12,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#444',
  },

  containerInput: {
    marginBottom: 4,
  },
  imageLogoSocial: {
    width: 20,
    height: 20,
  },

  containerScroll: {
    flex: 1,
    flexGrow: 1,
  },
});
