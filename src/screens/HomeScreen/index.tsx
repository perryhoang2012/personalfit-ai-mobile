import Block from '@components/Block';
import CheckBox from '@components/CheckBox';
import Text from '@components/Text';
import React from 'react';

const HomeScreen = () => {
  return (
    <Block middle center flex>
      <Text>HomeScreen</Text>
      <CheckBox active={true} onClick={() => {}} />
    </Block>
  );
};

export default HomeScreen;
