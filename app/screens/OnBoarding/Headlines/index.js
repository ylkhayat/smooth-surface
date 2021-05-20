import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import styles from './styles';
import LottieView from 'lottie-react-native';

const SCREEN_DIM = Dimensions.get('window');

const _entries = [
  {
    title: 'Track My Cycle',
    guide: 'Predictions to increase the probability of pregnancy find.',
    icon: 'paper-plane',
  },
  {
    title: 'Track My Pregnancy',
    guide: 'Keep trck of my symptoms mood and health.',
    icon: 'map-marker',
  },
  {
    title: 'Offer Advice',
    guide: 'Emotional support resides on the top suring such a phase.',
    icon: 'female',
  },
];

const Headlines = ({entries = _entries, onContinuePress}) => {
  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFillObject}>
        <LottieView
          source={require('app/assets/violinist.json')}
          autoPlay
          loop
        />
      </View>
      <Text style={styles.bigTitle}>
        Hola!{'\n'}I am your{'\n'}assistant
      </Text>
      <Text style={styles.smallTitle}>
        To assist you all part of your body.{'\n'}Select what brings you here.
      </Text>
      {/* <View style={carouselStyles.carouselContainer}>
        <RNCarousel
          data={entries}
          renderItem={_renderItem}
          sliderWidth={SCREEN_DIM.width}
          itemWidth={SCREEN_DIM.width / 1.7}
          centerContent={false}
          activeSlideAlignment={'start'}
          contentContainerCustomStyle={carouselStyles.carouselContentContainer}
          inactiveSlideShift={5}
        />
      </View> */}
    </View>
  );
};

export default Headlines;
