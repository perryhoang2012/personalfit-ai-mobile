import {storage} from '@utils/storageMMKV';
import {create} from 'zustand';

interface GeneralState {
  isLoading: boolean;
  showLoading: () => void;
  hideLoading: () => void;
  isFirstLaunchAfterInstall: boolean;
  setIsFirstLaunchAfterInstall: (value: boolean) => void;
}

const useGeneralStore = create<GeneralState>(set => ({
  isLoading: false,
  isFirstLaunchAfterInstall: storage.contains('isFirstLaunchAfterInstall')
    ? storage.getBoolean('isFirstLaunchAfterInstall') ?? true
    : true,
  showLoading: () => set({isLoading: true}),
  hideLoading: () => set({isLoading: false}),
  setIsFirstLaunchAfterInstall: (status: boolean) => {
    storage.set('isFirstLaunchAfterInstall', status);
    set({isFirstLaunchAfterInstall: status});
  },
}));

export default useGeneralStore;
