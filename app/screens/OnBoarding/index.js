import React, {useState} from 'react';
import {
  Animated,
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Introduction from './Introduction';
import styles from './styles';
import {ParallaxSwiper, ParallaxSwiperPage} from 'react-native-parallax-swiper';
import {width as getWidth} from 'styles/mixins';
import palette from '../../styles/palette';
const width = getWidth();
const OnBoarding = () => {
  const id = useSelector(state => state.loginReducer.id);

  const [myCustomAnimatedValue] = useState(new Animated.Value(0));
  const getPageTransformStyle = index => ({
    transform: [
      {
        scale: myCustomAnimatedValue?.interpolate({
          inputRange: [
            (index - 1) * (width + 8), // Add 8 for dividerWidth
            index * (width + 8),
            (index + 1) * (width + 8),
          ],
          outputRange: [0, 1, 0],
          extrapolate: 'clamp',
        }),
      },
      {
        rotate: myCustomAnimatedValue?.interpolate({
          inputRange: [
            (index - 1) * (width + 8),
            index * (width + 8),
            (index + 1) * (width + 8),
          ],
          outputRange: ['180deg', '0deg', '-180deg'],
          extrapolate: 'clamp',
        }),
      },
    ],
  });
  return (
    <ParallaxSwiper
      speed={0.5}
      animatedValue={myCustomAnimatedValue}
      dividerWidth={8}
      dividerColor="black"
      backgroundColor="black"
      onMomentumScrollEnd={activePageIndex => console.log(activePageIndex)}
      showProgressBar={true}
      progressBarBackgroundColor={palette.primary}
      progressBarValueBackgroundColor="white">
      <ParallaxSwiperPage
        BackgroundComponent={<View style={styles.backgroundImage} />}
        ForegroundComponent={<Introduction />}
      />
      <ParallaxSwiperPage
        BackgroundComponent={
          <Image
            style={styles.backgroundImage}
            source={{uri: 'https://goo.gl/gt4rWa'}}
          />
        }
        ForegroundComponent={
          <View style={styles.foregroundTextContainer}>
            <Animated.Text
              style={[styles.foregroundText, getPageTransformStyle(1)]}>
              Page 2
            </Animated.Text>
          </View>
        }
      />
      <ParallaxSwiperPage
        BackgroundComponent={
          <Image
            style={styles.backgroundImage}
            source={{uri: 'https://goo.gl/KAaVXt'}}
          />
        }
        ForegroundComponent={
          <View style={styles.foregroundTextContainer}>
            <Animated.Text
              style={[styles.foregroundText, getPageTransformStyle(2)]}>
              Page 3
            </Animated.Text>
          </View>
        }
      />
    </ParallaxSwiper>
  );
};

export default OnBoarding;
