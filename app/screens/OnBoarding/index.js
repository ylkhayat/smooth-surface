import React, {useState, useRef} from 'react';
import {View, Text} from 'react-native';
import Introduction from './Introduction';
import Headlines from './Headlines';
import Complete from './Complete';
import styles from './styles';
import palette from '../../styles/palette';
import {Button} from 'react-native-paper';
import Swiper from 'react-native-swiper';
import {height} from '../../styles/mixins';
import {useSelector} from 'react-redux';

const SwiperItem = ({children}) => (
  <View style={styles.swiperItemContainer}>{children}</View>
);

const OnBoarding = () => {
  const swiperRef = useRef();
  const [currentPage, setCurrentPage] = useState(0);
  const [proceed, setProceed] = useState(true);
  const {name} = useSelector(state => state.boardingReducer);

  const onContinuePress = () => {
    if (proceed) {
      if (currentPage === 1 && !name) {
        return;
      }
      if (currentPage >= 1) {
        setProceed(false);
      }
      swiperRef.current?.scrollBy(1);
      setCurrentPage(currentPage + 1);
    } else {
      if (currentPage <= 1) {
        setProceed(true);
      }
      swiperRef.current?.scrollBy(-1);
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Swiper
        ref={swiperRef}
        style={styles.wrapper}
        showsButtons={false}
        showsPagination
        scrollEnabled={false}
        loop={false}
        paginationStyle={{bottom: undefined, top: height(5)}}
        dotStyle={{backgroundColor: palette.slightlyDarkPrimary}}
        activeDotStyle={{backgroundColor: palette.orange}}>
        <SwiperItem>
          <Introduction />
        </SwiperItem>
        <Headlines />
        <SwiperItem>
          <Complete />
        </SwiperItem>
      </Swiper>
      <Button
        mode="contained"
        color={palette.primary}
        onPress={onContinuePress}
        style={styles.continueButton}>
        <Text style={styles.continueButtonText}>
          {proceed ? 'To Infinity 🏁' : 'And Beyond 🛳'}
        </Text>
      </Button>
    </View>
  );
};

export default OnBoarding;
