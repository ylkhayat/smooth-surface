import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import RNCarousel from 'react-native-snap-carousel';
import styles, {carouselStyles} from './styles';
import GuideItem from './GuideItem';
import {Button} from 'react-native-paper';
import palette from 'styles/palette';

const SCREEN_DIM = Dimensions.get('window');

const _renderItem = ({item, index}) => <GuideItem item={item} />;

const _entries = [
  {
    title: 'Track My Cycle',
    guide: 'Predictions to increase the probability of pregnancy find.',
  },
  {
    title: 'Track My Pregnancy',
    guide: 'Keep trck of my symptoms mood and health.',
  },
  {
    title: 'Track My Cycle',
    guide: 'Predictions to increase the probability of pregnancy find.',
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
          data={entries}
          renderItem={_renderItem}
          sliderWidth={SCREEN_DIM.width}
          itemWidth={SCREEN_DIM.width / 1.7}
          centerContent={false}
          activeSlideAlignment={'start'}
          contentContainerCustomStyle={carouselStyles.carouselContentContainer}
          inactiveSlideShift={5}
        />
      </View>
    </View>
  );
};

export default Introduction;
