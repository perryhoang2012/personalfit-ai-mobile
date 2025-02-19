import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV({
  id: `personal-fit-ai-storage`,
  encryptionKey: 'huynhhoang2012@',
});
