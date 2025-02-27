import Block from '@components/Block';
import Button from '@components/Button';
import Text from '@components/Text';
import {useThemeStore} from '@themes/useThemeStore';
import React from 'react';
import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
  ViewStyle,
} from 'react-native';
import {SvgFromXml} from 'react-native-svg';
import {styles} from './Input.styles';

const svg_eye_slash = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.10244 11.4599C6.95994 11.4599 6.81744 11.4074 6.70494 11.2949C6.08994 10.6799 5.75244 9.86244 5.75244 8.99994C5.75244 7.20744 7.20744 5.75244 8.99994 5.75244C9.86244 5.75244 10.6799 6.08994 11.2949 6.70494C11.3999 6.80994 11.4599 6.95244 11.4599 7.10244C11.4599 7.25244 11.3999 7.39494 11.2949 7.49994L7.49994 11.2949C7.38744 11.4074 7.24494 11.4599 7.10244 11.4599ZM8.99994 6.87744C7.82994 6.87744 6.87744 7.82994 6.87744 8.99994C6.87744 9.37494 6.97494 9.73494 7.15494 10.0499L10.0499 7.15494C9.73494 6.97494 9.37494 6.87744 8.99994 6.87744Z" fill="#FAFAFA"/>
<path d="M4.19988 13.8826C4.07238 13.8826 3.93738 13.8376 3.83238 13.7476C3.02988 13.0651 2.30988 12.2251 1.69488 11.2501C0.899883 10.0126 0.899883 7.99511 1.69488 6.75011C3.52488 3.88511 6.18738 2.23511 8.99988 2.23511C10.6499 2.23511 12.2774 2.80511 13.7024 3.87761C13.9499 4.06511 14.0024 4.41761 13.8149 4.66511C13.6274 4.91261 13.2749 4.96511 13.0274 4.77761C11.7974 3.84761 10.4024 3.36011 8.99988 3.36011C6.57738 3.36011 4.25988 4.81511 2.63988 7.35761C2.07738 8.23511 2.07738 9.76511 2.63988 10.6426C3.20238 11.5201 3.84738 12.2776 4.55988 12.8926C4.79238 13.0951 4.82238 13.4476 4.61988 13.6876C4.51488 13.8151 4.35738 13.8826 4.19988 13.8826Z" fill="#FAFAFA"/>
<path d="M8.99993 15.7651C8.00242 15.7651 7.02742 15.5626 6.08992 15.1651C5.80492 15.0451 5.66992 14.7151 5.78992 14.4301C5.90992 14.1451 6.23992 14.0101 6.52492 14.1301C7.31992 14.4676 8.15242 14.6401 8.99242 14.6401C11.4149 14.6401 13.7324 13.1851 15.3524 10.6426C15.9149 9.76512 15.9149 8.23512 15.3524 7.35762C15.1199 6.99012 14.8649 6.63762 14.5949 6.30762C14.3999 6.06762 14.4374 5.71512 14.6774 5.51262C14.9174 5.31762 15.2699 5.34762 15.4724 5.59512C15.7649 5.95512 16.0499 6.34512 16.3049 6.75012C17.0999 7.98762 17.0999 10.0051 16.3049 11.2501C14.4749 14.1151 11.8124 15.7651 8.99993 15.7651Z" fill="#FAFAFA"/>
<path d="M9.51768 12.2025C9.25518 12.2025 9.01518 12.015 8.96268 11.745C8.90268 11.4375 9.10518 11.145 9.41268 11.0925C10.2377 10.9425 10.9277 10.2525 11.0777 9.42751C11.1377 9.12001 11.4302 8.92501 11.7377 8.97751C12.0452 9.03751 12.2477 9.33002 12.1877 9.63752C11.9477 10.935 10.9127 11.9625 9.62268 12.2025C9.58518 12.195 9.55518 12.2025 9.51768 12.2025Z" fill="#FAFAFA"/>
<path d="M1.50008 17.0625C1.35758 17.0625 1.21508 17.01 1.10258 16.8975C0.885078 16.68 0.885078 16.32 1.10258 16.1025L6.70508 10.5C6.92258 10.2825 7.28258 10.2825 7.50008 10.5C7.71758 10.7175 7.71758 11.0775 7.50008 11.295L1.89758 16.8975C1.78508 17.01 1.64258 17.0625 1.50008 17.0625Z" fill="#FAFAFA"/>
<path d="M10.8975 7.66508C10.755 7.66508 10.6125 7.61258 10.5 7.50008C10.2825 7.28258 10.2825 6.92258 10.5 6.70508L16.1025 1.10258C16.32 0.885078 16.68 0.885078 16.8975 1.10258C17.115 1.32008 17.115 1.68008 16.8975 1.89758L11.295 7.50008C11.1825 7.61258 11.04 7.66508 10.8975 7.66508Z" fill="#FAFAFA"/>
</svg>
`;
type Props = {
  value: string;
  onChangeValue?: (value: string) => void;
  keyboardType?: KeyboardTypeOptions | undefined;
  styleInput?: ViewStyle;
  placeholder?: string;
  middle?: boolean;
  center?: boolean;
  inputTitle?: string;
  isInputPassword?: boolean;
  styleContainer?: ViewStyle;
  error?: string;
  isSubmitted?: boolean;
  onBlur?:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
};

const Input = (props: Props) => {
  const {
    value,
    onChangeValue,
    keyboardType,
    styleInput,
    placeholder,
    middle,
    center,
    inputTitle,
    isInputPassword,
    styleContainer,
    error,
    isSubmitted,
    onBlur,
  } = props;

  const [isShowPassword, setIsShowPassword] = React.useState<boolean>(false);

  const {colors} = useThemeStore();

  return (
    <Block style={[styleContainer]}>
      {inputTitle && (
        <Text mb={8} regular size={14} height={22} color={colors.TEXT_INVERT}>
          {inputTitle}
        </Text>
      )}
      <Block
        row
        space="between"
        middle
        center
        style={[styles.container, {borderColor: colors.BORDER_INPUT}]}>
        <TextInput
          value={value}
          onChangeText={onChangeValue}
          keyboardType={keyboardType || 'default'}
          style={[
            styles.containerInput,
            center && styles.center,
            middle && styles.middle,
            {color: colors.NEUTRAL},
            styleInput,
          ]}
          placeholder={placeholder}
          placeholderTextColor={colors.TEXT_INVERT}
          secureTextEntry={isInputPassword && !isShowPassword}
          onBlur={onBlur}
        />
        {isInputPassword && (
          <Button onPress={() => setIsShowPassword(pre => !pre)}>
            <SvgFromXml xml={svg_eye_slash} width={18} height={18} />
          </Button>
        )}
      </Block>
      <Block height={20} mt={4}>
        {error && isSubmitted && (
          <Text size={14} color={colors.ALERTS_ERROR}>
            {error}
          </Text>
        )}
      </Block>
    </Block>
  );
};

export default Input;
