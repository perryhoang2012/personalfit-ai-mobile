import Loading from '@components/Loading';
import {setLocale} from '@locales';
import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from '@utils/queryClient';
import React, {useEffect} from 'react';
import BootSplash from 'react-native-bootsplash';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import './ReactotronConfig';
import RootNavigation from './src/navigation/RootNavigation';
import useFirstTime from '@hooks/useFirstTime';

function App(): JSX.Element {
  setLocale('en');
  useEffect(() => {
    const init = async () => {};

    init().finally(async () => {
      await BootSplash.hide({fade: true});
    });
  }, []);
  useFirstTime();

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <RootNavigation />
        <Loading />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

export default App;
