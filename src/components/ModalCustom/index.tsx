import Block from '@components/Block';
import Button from '@components/Button';
import Text from '@components/Text';
import {t} from '@locales';
import {useThemeStore} from '@themes/useThemeStore';
import React from 'react';
import {Modal} from 'react-native';
import {styles} from './ModalCustom.style';

type Props = {
  open: boolean;
  toggleCloseModal: () => void;
  children: React.ReactNode;
};

const ModalCustom = (props: Props) => {
  const {open, toggleCloseModal, children} = props;

  const {colors} = useThemeStore();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={open}
      onRequestClose={() => {
        toggleCloseModal();
      }}>
      <Block style={styles.container} center>
        <Button style={styles.overlay} onPress={() => toggleCloseModal()} />
        <Block style={[styles.modalView]}>
          <Block mb={20} radius={20} background={colors.NEUTRAL} pa={16}>
            {children}
          </Block>
          <Block style={styles.buttonBottom}>
            <Button
              middle
              center
              background={colors.NEUTRAL}
              height={46}
              radius={20}
              mb={20}
              onPress={() => toggleCloseModal()}>
              <Text medium color={colors.GRAY_900} size={16}>
                {t('CONFIRM')}
              </Text>
            </Button>
            <Button
              middle
              center
              radius={20}
              height={46}
              mb={40}
              background={colors.GRAY_800}
              onPress={() => toggleCloseModal()}>
              <Text medium color={colors.NEUTRAL} size={16}>
                {t('CANCEL')}
              </Text>
            </Button>
          </Block>
        </Block>
      </Block>
    </Modal>
  );
};

export default ModalCustom;
