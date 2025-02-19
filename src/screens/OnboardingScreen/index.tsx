import {IMAGES} from '@assets/images';
import Block from '@components/Block';
import Button from '@components/Button';
import Text from '@components/Text';
import {HEIGHT, WIDTH} from '@helpers/uiHelper';
import {t} from '@locales';
import {useThemeStore} from '@themes/useThemeStore';
import React, {useRef, useState} from 'react';
import {ImageBackground, ImageSourcePropType, StyleSheet} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

interface Slide {
  title: string;
  description: string;
  image: ImageSourcePropType;
  isLast?: boolean;
}

const slides: Slide[] = [
  {
    title: t('FITNESS_ASSESSMENT'),
    description: t('FITNESS_ASSESSMENT_DESC'),
    image: IMAGES.bg_onboard_1,
  },
  {
    title: t('GOAL_SETTING'),
    description: t('GOAL_SETTING_DESC'),
    image: IMAGES.bg_onboard_2,
  },
  {
    title: t('EXPERT_SUPPORT'),
    description: t('EXPERT_SUPPORT_DESC'),
    image: IMAGES.bg_onboard_3,
    isLast: true,
  },
];

const OnboardingScreen: React.FC = () => {
  const {colors} = useThemeStore();

  const carouselRef = useRef<any>(null);

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const renderItem = ({item}: {item: Slide}) => (
    <ImageBackground source={item.image} style={styles.slide}>
      <Block style={styles.textContainer}>
        <Block>
          <Pagination
            dotsLength={slides.length}
            activeDotIndex={activeIndex}
            containerStyle={{width: 100}}
            dotStyle={styles.activeDot}
            inactiveDotStyle={styles.inactiveDot}
            inactiveDotOpacity={0.4}
            inactiveDotScale={1}
          />
        </Block>

        <Text semiBold size={30} color={colors.NEUTRAL}>
          {item.title}
        </Text>
        <Text mt={8} size={16} regular color={colors.NEUTRAL} height={22}>
          {item.description}
        </Text>
        <Button
          mt={32}
          width={140}
          background={colors.NEUTRAL}
          radius={20}
          middle
          center
          py={16}
          onPress={() => {
            if (item.isLast) {
            } else {
              carouselRef.current.snapToNext();
              setActiveIndex(activeIndex + 1);
            }
          }}>
          <Text medium height={22} size={18} color={colors.GRAY_900}>
            {t(item.isLast ? 'GET_STARTED' : 'NEXT')}
          </Text>
        </Button>
      </Block>
    </ImageBackground>
  );

  return (
    <Carousel
      ref={carouselRef}
      data={slides}
      renderItem={renderItem}
      sliderWidth={WIDTH}
      itemWidth={WIDTH}
      itemHeight={HEIGHT}
      layout="stack"
      onSnapToItem={index => setActiveIndex(index)}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    width: WIDTH,
    height: HEIGHT,
    justifyContent: 'flex-end',
    paddingBottom: 50,
  },
  textContainer: {
    paddingHorizontal: 40,
  },
  activeDot: {
    width: 40,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  inactiveDot: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: 'gray',
  },
});

export default OnboardingScreen;
