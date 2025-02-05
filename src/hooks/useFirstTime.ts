import useGeneralStore from '@store/generalStore';
import {useEffect} from 'react';

const useFirstTime = () => {
  const isFirstLaunchAfterInstall = useGeneralStore(
    state => state.isFirstLaunchAfterInstall,
  );
  const setIsFirstLaunchAfterInstall = useGeneralStore(
    state => state.setIsFirstLaunchAfterInstall,
  );

  useEffect(() => {
    if (isFirstLaunchAfterInstall) {
      setIsFirstLaunchAfterInstall(false);
    }
  }, [isFirstLaunchAfterInstall, setIsFirstLaunchAfterInstall]);
};

export default useFirstTime;
