import RouteName from '@navigation/RouteName';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CardStyleInterpolators} from '@react-navigation/stack';
import {
  default as AccountScreen,
  default as ActivityScreen,
} from '@screens/AccountScreen';
import ExploreScreen from '@screens/ExploreScreen';
import HomeScreen from '@screens/HomeScreen';
import React from 'react';
import {Platform} from 'react-native';
import CustomAppTabBar from './CustomAppTabBar';

const Tab = createBottomTabNavigator();

type TabBottomRoutes = {
  name: string;
  component: React.ComponentType<any>;
  title: string;
};

const AppBottomTab = () => {
  const tabBottomRoutes: TabBottomRoutes[] = [
    {
      name: RouteName.Home,
      component: HomeScreen,
      title: 'Home',
    },
    {
      name: RouteName.ActivityScreen,
      component: ActivityScreen,
      title: 'Activity',
    },
    {
      name: RouteName.ExploreScreen,
      component: ExploreScreen,
      title: 'Explore',
    },
    {
      name: RouteName.AccountScreen,
      component: AccountScreen,
      title: 'Account',
    },
  ];

  const renderTab = (item: TabBottomRoutes) => {
    return (
      <Tab.Screen
        key={item.name}
        name={item.name}
        component={item.component}
        options={{title: item.title, tabBarHideOnKeyboard: true}}
      />
    );
  };

  const screenOptions = {
    headerShown: false,
    cardStyleInterpolator: Platform.select({
      android: CardStyleInterpolators.forFadeFromBottomAndroid,
      ios: CardStyleInterpolators.forScaleFromCenterAndroid,
    }),
    tabBarHideOnKeyboard: true,
    adaptive: true,
    keyboardHidesTabBar: true,
  };

  return (
    <Tab.Navigator
      backBehavior="none"
      screenOptions={{
        ...screenOptions,
        tabBarStyle: {
          position: 'absolute',
          overflow: 'visible',
        },
      }}
      tabBar={(props: any) => <CustomAppTabBar {...props} />}>
      {tabBottomRoutes.map(item => renderTab(item))}
    </Tab.Navigator>
  );
};

export default AppBottomTab;
