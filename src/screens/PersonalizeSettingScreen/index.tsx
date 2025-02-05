import Block from '@components/Block';
import Button from '@components/Button';
import Text from '@components/Text';
import {t} from '@locales';
import {colors} from '@themes/colors';
import React from 'react';
import {View} from 'react-native';
import {styles} from './PersonalizeSetting.styles';

const PersonalizeSettingScreen = () => {
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
          <Text color={colors.GRAY_400} regular size={16} height={24}>
            Date of Birth
          </Text>
        </Block>
        <Block style={styles.inputRow}>
          <Text color={colors.NEUTRAL} regular height={24} size={16}>
            {t('GENDER')}
          </Text>
          <Text color={colors.GRAY_400} regular size={16} height={24}>
            Date of Birth
          </Text>
        </Block>
        <Block style={styles.inputRow}>
          <Text color={colors.NEUTRAL} regular height={24} size={16}>
            {t('HEIGHT')}
          </Text>
          <Text color={colors.GRAY_400} regular size={16} height={24}>
            Date of Birth
          </Text>
        </Block>
        <Block style={styles.inputRow}>
          <Text color={colors.NEUTRAL} regular height={24} size={16}>
            {t('WEIGHT')}
          </Text>
          <Text color={colors.GRAY_400} regular size={16} height={24}>
            Date of Birth
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
    </View>
  );
};

export default PersonalizeSettingScreen;
