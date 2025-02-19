import {moderateScale, scale, verticalScale} from '@helpers/uiHelper';
import {fonts} from '@themes/fonts';
import React from 'react';
import {Platform, Text as TextBase} from 'react-native';
import {styles} from './Text.styles';
import {useTheme} from '@react-navigation/native';

export interface Props {
  flex?: boolean;
  center?: boolean;
  left?: boolean;
  right?: boolean;
  style?: any;
  pa?: number;
  px?: number;
  py?: number;
  pl?: number;
  pr?: number;
  pt?: number;
  pb?: number;
  ma?: number;
  mx?: number;
  my?: number;
  ml?: number;
  mr?: number;
  mt?: number;
  mb?: number;
  primary?: boolean;
  secondary?: boolean;
  title?: boolean;
  size?: number;
  weight?: string | number;
  height?: number;
  color?: string;
  numberOfLines?: number;
  black?: boolean;
  blackItalic?: boolean;
  bold?: boolean;
  boldItalic?: boolean;
  extraBold?: boolean;
  extraBoldItalic?: boolean;
  extraLight?: boolean;
  extraLightItalic?: boolean;
  italic?: boolean;
  light?: boolean;
  lightItalic?: boolean;
  medium?: boolean;
  mediumItalic?: boolean;
  regular?: boolean;
  semiBold?: boolean;
  semiBoldItalic?: boolean;
  thin?: boolean;
  thinItalic?: boolean;
  children?: any;
}

const Text: React.FC<Props> = ({
  children,
  flex,
  center,
  left,
  right,
  style,
  pa,
  px,
  py,
  pl,
  pr,
  pt,
  pb,
  ma,
  mx,
  my,
  ml,
  mr,
  mt,
  mb,
  title,
  size,
  weight,
  height,
  color,
  black,
  blackItalic,
  bold,
  boldItalic,
  extraBold,
  extraBoldItalic,
  extraLight,
  extraLightItalic,
  italic,
  light,
  lightItalic,
  medium,
  mediumItalic,
  regular,
  semiBold,
  semiBoldItalic,
  thin,
  thinItalic,
}) => {
  const colors = useTheme().colors;

  const textStyles: any = [
    {color: colors.GRAY_900},
    color && {
      color: colors[color as keyof typeof colors] || color,
    },
    flex && {flex: 1},
    !size && {lineHeight: 20},
    title && styles.title,
    center && styles.center,
    left && styles.left,
    right && styles.right,
    pa && {padding: pa},
    px && {paddingHorizontal: px},
    py && {paddingVertical: py},
    pl && {paddingLeft: pl},
    pr && {paddingRight: pr},
    pt && {paddingTop: pt},
    pb && {paddingBottom: pb},
    ma && {margin: ma},
    mx && {marginHorizontal: mx},
    my && {marginVertical: my},
    ml && {marginLeft: ml},
    mr && {marginRight: scale(mr)},
    mt && {marginTop: verticalScale(mt)},
    mb && {marginBottom: verticalScale(mb)},
    height && {lineHeight: height || 22},
    weight && {
      fontWeight: weight === 'bold' && Platform.OS === 'ios' ? '500' : weight,
    },
    size && {fontSize: size},
    black && {fontFamily: fonts.BLACK},
    blackItalic && {fontFamily: fonts.BLACK_ITALIC},
    bold && {fontFamily: fonts.BOLD},
    boldItalic && {fontFamily: fonts.BOLD_ITALIC},
    extraBold && {fontFamily: fonts.EXTRA_BOLD},
    extraBoldItalic && {fontFamily: fonts.EXTRA_BOLD_ITALIC},
    extraLight && {fontFamily: fonts.EXTRA_LIGHT},
    extraLightItalic && {fontFamily: fonts.EXTRA_LIGHT_ITALIC},
    italic && {fontFamily: fonts.ITALIC},
    light && {fontFamily: fonts.LIGHT},
    lightItalic && {fontFamily: fonts.LIGHT_ITALIC},
    medium && {fontFamily: fonts.MEDIUM},
    mediumItalic && {fontFamily: fonts.MEDIUM_ITALIC},
    regular && {fontFamily: fonts.REGULAR},
    semiBold && {fontFamily: fonts.SEMI_BOLD},
    semiBoldItalic && {fontFamily: fonts.SEMI_BOLD_ITALIC},
    thin && {fontFamily: fonts.THIN},
    thinItalic && {fontFamily: fonts.THIN_ITALIC},
    style,
  ];

  return <TextBase style={textStyles}>{children}</TextBase>;
};

Text.defaultProps = {};

export default Text;
