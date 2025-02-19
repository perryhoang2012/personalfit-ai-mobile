import {RootStackParamList} from '@models/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import useGeneralStore from '@store/generalStore';
import useUserStore from '@store/userStore';
import React, {useMemo} from 'react';
import {navigationRef} from './NavigationService';
import ApplicationNavigator from './stack/ApplicationNavigator';
import AuthNavigator from './stack/AuthNavigator';

const linking = {
  prefixes: ['personalfit-ai://', 'https://personalfitai.com'],
  config: {
    screens: {
      Home: 'Home',
    },
  },
};

const RootNavigation = () => {
  const RootStack = createNativeStackNavigator<RootStackParamList>();

  const isFirstLaunchAfterInstall = useGeneralStore(
    state => state.isFirstLaunchAfterInstall,
  );

  const userToken = useUserStore(state => state.userToken);

  const getInitialRoute = () => {
    if (isFirstLaunchAfterInstall) {
      return 'OnBoarding';
    }
  };

  const StackScreen = useMemo(() => {
    if (!userToken) {
      return AuthNavigator();
    }

    return ApplicationNavigator();
  }, [userToken]);

  return (
    <NavigationContainer ref={navigationRef} linking={linking}>
      <RootStack.Navigator
        initialRouteName={getInitialRoute()}
        screenOptions={{
          headerShown: false,
        }}>
        {StackScreen}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
