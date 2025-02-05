import Block from '@components/Block';
import Button from '@components/Button';
import Text from '@components/Text';
import {t} from '@locales';
import {colors} from '@themes/colors';
import React from 'react';
import {View} from 'react-native';
import {styles} from './PersonalizeSetting.styles';
import ModalCustom from '@components/ModalCustom';
import Calendars from '@components/Calendars';
import dayjs from 'dayjs';

const PersonalizeSettingScreen = () => {
  const [showModalSelectDateOfBirth, setShowModalSelectDateOfBirth] =
    React.useState<boolean>(false);

  const [state, setState] = React.useState({
    date_of_birth: dayjs().toDate(),
    gender: 'Male',
    height: 180,
    weight: 180,
  });
  return (
    <View style={styles.container}>
      <Text semiBold size={24} height={32} color={colors.GRAY_50}>
        {t('PERSONALIZE_FITNESS_AND_HEALTH')}
      </Text>
      <Text mt={6} medium color={colors.TEXT_SECONDARY} size={14}>
        {t('PERSONALIZE_DESC')}
      </Text>

      <Block mt={40} flex>
        <Block style={styles.inputRow}>
          <Text color={colors.NEUTRAL} regular height={24} size={16}>
            {t('DATE_OF_BIRTH')}
          </Text>
          <Button
            onPress={() => {
              setShowModalSelectDateOfBirth(true);
            }}>
            <Text color={colors.GRAY_400} regular size={16} height={24}>
              {dayjs(state.date_of_birth).format('DD/MM/YYYY')}
            </Text>
          </Button>
        </Block>
        <Block style={styles.inputRow}>
          <Text color={colors.NEUTRAL} regular height={24} size={16}>
            {t('GENDER')}
          </Text>
          <Text color={colors.GRAY_400} regular size={16} height={24}>
            {state.gender}
          </Text>
        </Block>
        <Block style={styles.inputRow}>
          <Text color={colors.NEUTRAL} regular height={24} size={16}>
            {t('HEIGHT')}
          </Text>
          <Text color={colors.GRAY_400} regular size={16} height={24}>
            {state.height} {t('CM')}
          </Text>
        </Block>
        <Block style={styles.inputRow}>
          <Text color={colors.NEUTRAL} regular height={24} size={16}>
            {t('WEIGHT')}
          </Text>
          <Text color={colors.GRAY_400} regular size={16} height={24}>
            {state.weight} {t('KG')}
          </Text>
        </Block>
      </Block>

      <Button
        middle
        center
        mb={40}
        radius={20}
        background={colors.NEUTRAL}
        py={16}>
        <Text color={colors.GRAY_900} medium size={16}>
          Continue
        </Text>
      </Button>

      <ModalCustom
        open={showModalSelectDateOfBirth}
        toggleCloseModal={() => {
          setShowModalSelectDateOfBirth(!showModalSelectDateOfBirth);
        }}>
        <Block>
          <Text mb={4} medium size={18} height={26} color={colors.GRAY_900}>
            {t('SELECT_DATE_OF_BIRTH')}
          </Text>
          <Text mb={8} regular size={16} color={colors.GRAY_600}>
            {t('SELECT_DATE_OF_BIRTH_DESC')}
          </Text>
          <Calendars
            date={dayjs(state.date_of_birth).toDate()}
            setDate={day => {
              setState({...state, date_of_birth: dayjs(day).toDate()});
            }}
          />
        </Block>
      </ModalCustom>
    </View>
  );
};

export default PersonalizeSettingScreen;
