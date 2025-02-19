import {storage} from '@utils/storageMMKV';
import {create} from 'zustand';

interface GeneralState {
  isLoading: boolean;
  showLoading: () => void;
  hideLoading: () => void;
  isFirstLaunchAfterInstall: boolean;
  setIsFirstLaunchAfterInstall: (value: boolean) => void;
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

const useGeneralStore = create<GeneralState>(set => ({
  isLoading: false,
  isFirstLaunchAfterInstall: storage.contains('isFirstLaunchAfterInstall')
    ? storage.getBoolean('isFirstLaunchAfterInstall') ?? true
    : true,
  isDarkMode: storage.contains('isDarkMode')
    ? storage.getBoolean('isDarkMode') ?? true
    : true,
  showLoading: () => set({isLoading: true}),
  hideLoading: () => set({isLoading: false}),
  setIsFirstLaunchAfterInstall: (status: boolean) => {
    storage.set('isFirstLaunchAfterInstall', status);
    set({isFirstLaunchAfterInstall: status});
  },
  setIsDarkMode: (status: boolean) => {
    storage.set('isDarkMode', status);
    set({isDarkMode: status});
  },
}));

export default useGeneralStore;
