import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {
  state: any;
  descriptors: any;
  navigation: any;
};

const CustomAppTabBar = (props: Props) => {
  const {state, descriptors, navigation} = props;
  return (
    <View>
      <Text>CustomAppTabBar</Text>
    </View>
  );
};

export default CustomAppTabBar;

const styles = StyleSheet.create({});
