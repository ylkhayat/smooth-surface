import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import RNCarousel from 'react-native-snap-carousel';
import styles, {carouselStyles} from './styles';
import GuideItem from './GuideItem';

const SCREEN_DIM = Dimensions.get('window');

const _renderItem = ({item, index}) => <GuideItem item={item} />;

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
const Introduction = ({entries = _entries, onContinuePress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.bigTitle}>
        Hola!{'\n'}I am your{'\n'}assistant
      </Text>
      <Text style={styles.smallTitle}>
        To assist you all part of your body.{'\n'}Select what brings you here.
      </Text>
      <View style={carouselStyles.carouselContainer}>
        <RNCarousel
          useScrollView
          data={entries}
          renderItem={_renderItem}
          sliderWidth={SCREEN_DIM.width}
          itemWidth={SCREEN_DIM.width / 1.7}
          activeSlideAlignment={'start'}
          contentContainerCustomStyle={carouselStyles.carouselContentContainer}
        />
      </View>
    </View>
  );
};

export default Introduction;
