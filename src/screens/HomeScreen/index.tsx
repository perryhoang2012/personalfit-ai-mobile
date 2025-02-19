import Block from '@components/Block';
import CheckBox from '@components/CheckBox';
import Toggle from '@components/Toggle';
import useGeneralStore from '@store/generalStore';
import {useThemeStore} from '@themes/useThemeStore';
import React from 'react';

const HomeScreen = () => {
  const isDarkMode = useGeneralStore(state => state.isDarkMode);

  const {colors, toggleTheme} = useThemeStore();
  return (
    <Block middle center flex style={{backgroundColor: colors.BACKGROUND}}>
      <CheckBox active={true} onClick={() => {}} />
      <Toggle isEnabled={isDarkMode} toggleSwitch={toggleTheme} />
    </Block>
  );
};

export default HomeScreen;
