import Block from '@components/Block';
import Button from '@components/Button';
import Text from '@components/Text';
import {useThemeStore} from '@themes/useThemeStore';
import React, {useEffect, useRef} from 'react';
import {FlatList} from 'react-native';
import {SvgFromXml} from 'react-native-svg';
import {styles} from './SelectNumber.style';

type Props = {
  number: number;
  setNumber: (number: number) => void;
  minNumber: number;
  maxNumber: number;
  unit?: string;
};

const svg_minus_circle = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.9993 2.6665C8.65268 2.6665 2.66602 8.65317 2.66602 15.9998C2.66602 23.3465 8.65268 29.3332 15.9993 29.3332C23.346 29.3332 29.3327 23.3465 29.3327 15.9998C29.3327 8.65317 23.346 2.6665 15.9993 2.6665ZM21.226 16.9998H10.5593C10.0127 16.9998 9.55935 16.5465 9.55935 15.9998C9.55935 15.4532 10.0127 14.9998 10.5593 14.9998H21.226C21.7727 14.9998 22.226 15.4532 22.226 15.9998C22.226 16.5465 21.786 16.9998 21.226 16.9998Z" fill="#0F0F0F"/>
</svg>
`;

const svg_add_circle = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.9993 2.6665C8.65268 2.6665 2.66602 8.65317 2.66602 15.9998C2.66602 23.3465 8.65268 29.3332 15.9993 29.3332C23.346 29.3332 29.3327 23.3465 29.3327 15.9998C29.3327 8.65317 23.346 2.6665 15.9993 2.6665ZM21.3327 16.9998H16.9993V21.3332C16.9993 21.8798 16.546 22.3332 15.9993 22.3332C15.4527 22.3332 14.9993 21.8798 14.9993 21.3332V16.9998H10.666C10.1193 16.9998 9.66602 16.5465 9.66602 15.9998C9.66602 15.4532 10.1193 14.9998 10.666 14.9998H14.9993V10.6665C14.9993 10.1198 15.4527 9.6665 15.9993 9.6665C16.546 9.6665 16.9993 10.1198 16.9993 10.6665V14.9998H21.3327C21.8793 14.9998 22.3327 15.4532 22.3327 15.9998C22.3327 16.5465 21.8793 16.9998 21.3327 16.9998Z" fill="#0F0F0F"/>
</svg>
`;

const SelectNumber = (props: Props) => {
  const {number, setNumber, minNumber, maxNumber, unit} = props;

  const {colors} = useThemeStore();

  const [numberActive, setNumberActive] = React.useState<number>(number);

  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    setNumberActive(number);
  }, [number]);

  const listNumber = Array.from(
    {length: maxNumber - minNumber + 1},
    (_, i) => i + minNumber,
  );

  const _renderItemNumber = ({item}: {item: number}) => {
    return (
      <Text color={colors.GRAY_900} semiBold size={48} height={56}>
        {item}
      </Text>
    );
  };

  useEffect(() => {
    flatListRef.current?.scrollToIndex({
      index: numberActive - minNumber,
      animated: true,
    });
  }, [minNumber, numberActive]);

  const getItemLayout = (data: any, index: number) => ({
    length: 50,
    offset: 50.5 * index,
    index,
  });

  return (
    <Block>
      <Block row middle center style={styles.container}>
        <Button middle center onPress={() => setNumberActive(numberActive - 1)}>
          <SvgFromXml xml={svg_minus_circle} width={32} height={32} />
        </Button>
        <FlatList
          ref={flatListRef}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.containerList}
          style={styles.styleList}
          data={listNumber}
          maxToRenderPerBatch={5}
          renderItem={_renderItemNumber}
          keyExtractor={item => item.toString()}
          getItemLayout={getItemLayout}
          initialNumToRender={1}
          initialScrollIndex={numberActive - minNumber}
        />
        <Button middle center onPress={() => setNumberActive(numberActive + 1)}>
          <SvgFromXml xml={svg_add_circle} width={32} height={32} />
        </Button>
      </Block>
      {unit && (
        <Block middle center>
          <Text semiBold size={20} height={28} color={colors.GRAY_600}>
            {unit}
          </Text>
        </Block>
      )}
    </Block>
  );
};

export default SelectNumber;
