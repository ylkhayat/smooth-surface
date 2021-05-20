import React, {useState} from 'react';
import {View, Text} from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import {carouselStyles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import palette from 'styles/palette';
import * as Animatable from 'react-native-animatable';

const SelectedIndicator = ({selected}: any) => (
  <View style={carouselStyles.indicatorContainer}>
    <Animatable.View
      style={carouselStyles.indicatorContentContainer}
      animation={selected ? 'bounceIn' : 'fadeOut'}>
      <Icon name="check" color={palette.white} />
    </Animatable.View>
  </View>
);

const GuideItem = ({item}) => {
  const [selected, setSelected] = useState(false);
  const onSelect = () => setSelected(prevSelected => !prevSelected);
  return (
    <TouchableScale
      activeScale={0.98}
      tension={50}
      style={carouselStyles.slideContainer}
      onPress={onSelect}>
      <SelectedIndicator selected={selected} />

      <View style={carouselStyles.slideContentContainer}>
        <View style={carouselStyles.itemIconContainer}>
          <View style={carouselStyles.itemIcon}>
            <Icon name={item.icon} color={palette.grey} size={25} />
          </View>
        </View>
        <View style={carouselStyles.itemTitleContainer}>
          <Text style={carouselStyles.itemTitle}>{item.title}</Text>
        </View>
        <Text style={carouselStyles.itemGuide}>{item.guide}</Text>
      </View>
    </TouchableScale>
  );
};

export default GuideItem;
