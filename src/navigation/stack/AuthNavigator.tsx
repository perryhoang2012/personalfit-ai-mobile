import RouteName from '@navigation/RouteName';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PersonalizeSettingScreen from '@screens/PersonalizeSettingScreen';
import SignInScreen from '@screens/SignInScreen';
import SignUpScreen from '@screens/SignUpScreen';
import React from 'react';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <>
      <Stack.Screen name={RouteName.SignUp} component={SignUpScreen} />
      <Stack.Screen name={RouteName.SignIn} component={SignInScreen} />
      <Stack.Screen
        name={RouteName.PersonalizeSettingScreen}
        component={PersonalizeSettingScreen}
      />
    </>
  );
};

export default AuthNavigator;
