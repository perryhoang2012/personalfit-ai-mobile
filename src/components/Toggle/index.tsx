import {useThemeStore} from '@themes/useThemeStore';
import React from 'react';
import {Switch} from 'react-native';

type Props = {
  isEnabled: boolean;
  toggleSwitch: (e: boolean) => void;
};

const Toggle = (props: Props) => {
  const {isEnabled, toggleSwitch} = props;

  const {colors} = useThemeStore();

  console.log(colors);

  return (
    <Switch
      trackColor={{false: colors.GRAY_700, true: colors.PRIMARY}}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
      style={{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}}
    />
  );
};

export default Toggle;
