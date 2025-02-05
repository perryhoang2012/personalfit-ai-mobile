import React from 'react';
import {TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {styles} from './CheckBox.style';

type Props = {
  active: boolean;
  onClick: () => void;
};

const svg_check = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.91675 6.99992L5.83341 9.91659L11.6667 4.08325" stroke="#171717" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const CheckBox: React.FC<Props> = ({
  active,
  onClick,
}: Props): React.ReactElement => {
  return (
    <TouchableOpacity
      onPress={() => onClick()}
      style={[styles.container, active ? styles.active : styles.inActive]}>
      {active ? <SvgXml xml={svg_check} width={14} height={14} /> : <></>}
    </TouchableOpacity>
  );
};

export default CheckBox;
