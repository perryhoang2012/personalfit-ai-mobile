import {IMAGES} from '@assets/images';
import Block from '@components/Block';
import Button from '@components/Button';
import CustomImage from '@components/CustomImage';
import Input from '@components/Input';
import Text from '@components/Text';
import {t} from '@locales';
import {useThemeStore} from '@themes/useThemeStore';
import {emailRules, passwordRules} from '@utils/validationRules';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {ScrollView, View} from 'react-native';
import {styles} from './SignInScreen.styles';

const SignInScreen = () => {
  const {
    getValues,
    control,
    handleSubmit,
    formState: {errors, isSubmitted},
  } = useForm({
    mode: 'onSubmit',
  });

  const {colors} = useThemeStore();

  const onSubmit = () => {};

  return (
    <Block style={styles.container}>
      <ScrollView contentContainerStyle={styles.containerScroll}>
        <Block mt={150}>
          <Text size={20} semiBold height={28} color={colors.NEUTRAL}>
            {t('WELCOME_BACK')}
          </Text>
          <Text size={14} color={colors.TEXT_SECONDARY} height={22} mt={6}>
            {t('SIGN_IN_DESC')}
          </Text>
          <Block space="between" row middle center mt={40}>
            <Button style={styles.socialButton}>
              <CustomImage
                source={IMAGES.logo_google}
                style={styles.imageLogoSocial}
              />
              <Text medium size={14} color={colors.GRAY_50}>
                {t('SIGN_UP_WITH_GOOGLE')}
              </Text>
              <Block width={20} />
            </Button>
            <Button style={styles.socialButton}>
              <CustomImage
                source={IMAGES.logo_facebook}
                style={styles.imageLogoSocial}
              />
              <Text medium size={14} color={colors.GRAY_50}>
                {t('SIGN_UP_WITH_FACEBOOK')}
              </Text>
              <Block width={20} />
            </Button>
          </Block>
          <Block mt={24} mb={24} row middle>
            <View style={styles.divider} />
            <Text regular mx={10} color={colors.NEUTRAL} size={12} height={18}>
              {t('OR_SIGN_UP_WITH')}
            </Text>
            <View style={styles.divider} />
          </Block>
        </Block>
        <Block flex>
          <Controller
            control={control}
            name="email"
            rules={emailRules}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                placeholder={t('EMAIL')}
                value={value}
                onChangeValue={onChange}
                styleContainer={styles.containerInput}
                error={errors.email?.message as string}
                isSubmitted={isSubmitted}
                onBlur={onBlur}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            rules={passwordRules}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                placeholder={t('PASSWORD')}
                value={value}
                onChangeValue={onChange}
                styleContainer={styles.containerInput}
                error={errors.password?.message as string}
                isSubmitted={isSubmitted}
                onBlur={onBlur}
                isInputPassword={true}
              />
            )}
          />

          <Block style={{alignItems: 'flex-end'}} mt={4}>
            <Button>
              <Text medium size={14} color={colors.NEUTRAL}>
                {t('FORGOT_PASSWORD')}
              </Text>
            </Button>
          </Block>

          <Block center mt={90}>
            <Button
              radius={30}
              middle
              center
              height={46}
              background={colors.NEUTRAL}
              onPress={handleSubmit(onSubmit)}>
              <Text color={colors.GRAY_900} medium size={14} height={22}>
                {t('LOG_IN')}
              </Text>
            </Button>
            <Button onPress={() => {}} middle center mt={28}>
              <Text medium color={colors.NEUTRAL}>
                {t('NO_ACCOUNT_GO_TO_SIGN_UP')}
              </Text>
            </Button>
          </Block>
        </Block>

        <Block mb={32} middle center>
          <Text center size={12} regular color={colors.TEXT_INVERT}>
            {t('AGREE_TERMS')}
          </Text>
        </Block>
      </ScrollView>
    </Block>
  );
};

export default SignInScreen;
