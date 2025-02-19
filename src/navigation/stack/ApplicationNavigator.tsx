import RouteName from '@navigation/RouteName';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '@screens/HomeScreen';
import React from 'react';
import AppBottomTab from './AppBottomTab';

const Stack = createStackNavigator();

const ApplicationNavigator = () => {
  return (
    <>
      <Stack.Screen name={RouteName.BottomTab} component={HomeScreen}>
        {(props: React.JSX.IntrinsicAttributes) => <AppBottomTab {...props} />}
      </Stack.Screen>
    </>
  );
};

export default ApplicationNavigator;
