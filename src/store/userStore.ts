import {storage} from '@utils/storageMMKV';
import {create} from 'zustand';

interface UserState {
  userToken: string | null;
  setUserToken: (value: string) => void;
}

const useUserStore = create<UserState>(set => ({
  userToken: '1111111',
  setUserToken(value) {
    storage.set('userToken', value);
    set({userToken: value});
  },
}));

export default useUserStore;
