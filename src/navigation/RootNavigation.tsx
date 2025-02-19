import {RootStackParamList} from '@models/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen from '@screens/OnboardingScreen';
import PersonalizeSettingScreen from '@screens/PersonalizeSettingScreen';
import SignInScreen from '@screens/SignInScreen';
import SignUpScreen from '@screens/SignUpScreen';
import useGeneralStore from '@store/generalStore';
import useUserStore from '@store/userStore';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import {navigationRef} from './NavigationService';

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
    return userToken ? 'Home' : 'SignUp';
  };

  return (
    <NavigationContainer ref={navigationRef} linking={linking}>
      <RootStack.Navigator
        initialRouteName={getInitialRoute()}
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="OnBoarding" component={OnboardingScreen} />
        <RootStack.Screen name="SignUp" component={SignUpScreen} />
        <RootStack.Screen name="SignIn" component={SignInScreen} />
        <RootStack.Screen
          name="PersonalizeSettingScreen"
          component={PersonalizeSettingScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
